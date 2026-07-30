import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./Products.module.css";
import ProductItem from "../components/ProductItem/ProductItem";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";

function Products({ products }) {
  //getting a list of all unique categories to display in filters
  const uniqueCategories = [
    ...new Set(products.map((item) => item.category.name)),
  ];
  //getting a list of all unique prices to extract the min and max to use in price range filter
  const prices = [...new Set(products.map((item) => item.price))];
  const arrangedPrices = prices.sort((a, b) => a - b);
  const maxPrice = arrangedPrices[arrangedPrices.length - 1];
  const minPrice = arrangedPrices[0];

  //states to handle the controlled categories and price inputs
  const [category, setCategory] = useState([]);
  const [priceRange, setPriceRange] = useState(maxPrice);

  //creating a filtered products array based on the selected filters
  const filteredProducts = products.filter((i) => {
    const selectedCategory =
      !category.length || category.includes(i.category.name);
    const selectedRange = i.price >= minPrice && i.price <= priceRange;
    return selectedCategory && selectedRange;
  });

  //handling pagination logic
  const productsPerPage = 9;
  //const [currentPage, setCurrentPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const numOfPages = Math.ceil(filteredProducts.length / productsPerPage);

  //creating an array of the selected categories by adding/removing the checked/unchecked checkboxes to/from the selected categories array
  function storeSelectedCategories(e) {
    if (e.target.checked) {
      setCategory([...category, e.target.name]);
      //handle filtered products naturally being less than all products so pagination goes back to first page whenever we select a category
      handleSettingCurrentPage(1);
    } else setCategory(category.filter((c) => c !== e.target.name));
  }

  //clearing all category filters
  function handleClearingCatFilters() {
    setCategory([]);
  }

  //this function adds the current paginated page to the url
  function handleSettingCurrentPage(index) {
    setSearchParams({
      page: index,
    });
  }

  return (
    <div className={styles.productPageLayout}>
      <Filter
        uniqueCategories={uniqueCategories}
        maxPrice={maxPrice}
        minPrice={minPrice}
        category={category}
        storeSelectedCategories={storeSelectedCategories}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
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
