import styles from "./Pagination.module.css";
import Button from "../Button/Button";
import { useProducts } from "../../contexts/ProductsContext";

function Pagination() {
  const {
    currentPage,
    numOfPages,
    handleSettingCurrentPage: setCurrentPage,
  } = useProducts();
  
  const pages = Array.from({ length: numOfPages }, (_, i) => i);

  return (
    <div className={styles.pagination}>
      {pages.map((b, i) => (
        <Button
          type={i + 1 === currentPage ? "active" : ""}
          key={i}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
}

export default Pagination;
