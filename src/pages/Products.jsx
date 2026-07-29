import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./Products.module.css";
import ProductItem from "../components/ProductItem/ProductItem";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";

function Products({ products }) {

  const categories = [...new Set(products.map((item)=> item.category.name))]
  const prices = [...new Set(products.map((item)=> item.price))]
  const arrangedPrices = prices.sort((a, b)=> a-b);
  const maxPrice = arrangedPrices[arrangedPrices.length-1];
  const minPrice = arrangedPrices[0];

  const [category, setCategory] = useState([]);
  const [priceRange, setPriceRange] = useState(maxPrice);

  const filteredProducts = products.filter((i,index)=>{
    const selectedCategory = i.category.name === category[index];
    const selectedRange = i.price >= minPrice && i.price <= maxPrice;
    return selectedCategory && selectedRange;
  });

  const productsPerPage = 9;
  //const [currentPage, setCurrentPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);
  const numOfPages = Math.ceil(products.length / productsPerPage);


  function selectedCategories(e) {
    if(e.target.checked)
        setCategory([...category, e.target.name])
    else
        setCategory(category.filter((c)=> c!==e.target.name))
  }

  function handleSettingCurrentPage(index) {
    setSearchParams({
      page: index,
    });
  }
  return (
    <div className={styles.productPageLayout}>
      {products.length > 0 && <Filter uniqueCategories={categories} maxPrice={maxPrice} minPrice={minPrice} category={category} selectedCategories={selectedCategories} priceRange={priceRange} setPriceRange={setPriceRange} />}

      <div className={styles.gridLayout}>
        {paginatedProducts.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
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
