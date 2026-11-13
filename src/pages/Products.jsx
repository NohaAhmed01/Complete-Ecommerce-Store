import styles from "./Products.module.css";
import { useProducts } from "../contexts/ProductsContext";

import ProductItem from "../components/ProductItem/ProductItem";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import SearchBar from "../components/SearchBar/SearchBar";

function Products() {
  const { isLoading, paginatedProducts } = useProducts();

  if (isLoading) return <Loader />;
  else
    return (
      <div className={styles.productPageLayout}>
        <Filter />

        <div className={styles.main}>
        <SearchBar />
          <div className={styles.gridLayout}>
            {paginatedProducts.map((item) => (
              <ProductItem item={item} key={item.id}>
                <Button type="addToCart">Add To Cart</Button>
              </ProductItem>
            ))}
          </div>
          
          <Pagination />
        </div>
      </div>
    );
}

export default Products;
