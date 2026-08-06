import { useSearchParams } from "react-router-dom";

import styles from "./Products.module.css";
import ProductItem from "../components/ProductItem/ProductItem";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";

function Products({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  //getting a list of all unique categories to display in filters
  const uniqueCategories = [...new Set(products.map((item) => item.category))];
  //getting a list of all unique prices to extract the min and max to use in price range filter
  const prices = [...new Set(products.map((item) => item.price))];
  const arrangedPrices = prices.sort((a, b) => a - b);
  const maxPrice = arrangedPrices[arrangedPrices.length - 1];
  const minPrice = arrangedPrices[0];

  //variables to hold the controlled categories and price inputs from url
  const categoriesParams = searchParams.get("category")?.split(",") ?? [];
  const priceRangeParams = Number(searchParams.get("maxPrice")) || maxPrice;

  //creating a filtered products array based on the selected filters from url
  const filteredProducts = products.filter((product) => {
    const matchingCategory =
      categoriesParams.length === 0 ||
      categoriesParams.includes(product.category);
    const matchingRange = product.price <= priceRangeParams;
    return matchingCategory && matchingRange;
  });

  //a helper function that handles all url params updates logic
  function updateSearchParams(updates) {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  }

  //handling pagination logic
  const productsPerPage = 6;
  //const [currentPage, setCurrentPage] = useState(0);
  const currentPage = Number(searchParams.get("page")) || 1;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const numOfPages = Math.ceil(filteredProducts.length / productsPerPage);

  //updating url searchParams by adding/removing the checked/unchecked checkboxes to/from the selected categoriesParams array
  function toggleCategory(cat) {
    const updated = categoriesParams.includes(cat)
      ? categoriesParams.filter((c) => c !== cat)
      : [...categoriesParams, cat];

    updateSearchParams({
      category: updated.length ? updated.join(",") : null,
      page: 1,
    });
  }
  //clearing categoriesParams filter
  function handleClearingCatFilters(){
    updateSearchParams({
      category: null,
      page: 1,
    });
  }

  //this function adds the current paginated page to the url
  function handleSettingCurrentPage(value) {
    updateSearchParams({
      page: value,
    });
  }

  return (
    <div className={styles.productPageLayout}>
      <Filter
        uniqueCategories={uniqueCategories}
        maxPrice={maxPrice}
        minPrice={minPrice}
        category={categoriesParams}
        storeSelectedCategories={toggleCategory}
        priceRange={priceRangeParams}
        updateSearchParams={updateSearchParams}
        handleClearingCatFilters={handleClearingCatFilters}
      />

      <div className={styles.main}>
        <div className={styles.gridLayout}>
          {paginatedProducts.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          numOfPages={numOfPages}
          setCurrentPage={handleSettingCurrentPage}
        />
      </div>
    </div>
  );
}

export default Products;
