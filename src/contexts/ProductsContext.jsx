import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Context = createContext();

function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(function () {
    async function fetchData() {
      try {
        setisLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("some error happened");
      } finally {
        setisLoading(false);
      }
    }
    fetchData();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  //getting a list of all unique categories to display in filters
  const uniqueCategories = useMemo(
    () => [...new Set(products.map((item) => item.category))],
    [products],
  );
  //extracting the min and max to use in price range filter
  const { minPrice, maxPrice } = useMemo(() => {
    const prices = products.map((item) => item.price);

    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    };
  }, [products]);

  //variables to hold the controlled categories and price inputs from url
  const categoriesParams = searchParams.get("category")?.split(",") ?? [];
  const priceRangeParams = Number(searchParams.get("maxPrice")) || maxPrice;

  //creating a filtered products array based on the selected filters from url
  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchingCategory =
          categoriesParams.length === 0 ||
          categoriesParams.includes(product.category);
        const matchingRange = product.price <= priceRangeParams;
        return matchingCategory && matchingRange;
      }),
    [products, categoriesParams, priceRangeParams],
  );

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
  function handleClearingCatFilters() {
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
    <Context.Provider
      value={{
        products,
        isLoading,
        uniqueCategories,
        maxPrice,
        minPrice,
        categoriesParams,
        toggleCategory,
        priceRangeParams,
        updateSearchParams,
        handleClearingCatFilters,
        paginatedProducts,
        currentPage,
        numOfPages,
        handleSettingCurrentPage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useProducts() {
  const prod = useContext(Context);
  return prod;
}

export { ProductsContext, useProducts };
