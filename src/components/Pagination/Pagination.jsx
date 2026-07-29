import styles from "./Pagination.module.css";
import Button from "../Button/Button";

function Pagination({ currentPage, numOfPages, setCurrentPage }) {

  const pages = Array.from({ length: numOfPages }, (_, i) => i);
  
  return (
    <div className={styles.pagination}>
      {pages.map((b, i) => (
        <Button
          type={i+1 === currentPage ? 'active' : ''}
          key={i}
          onClick={() => setCurrentPage(i+1)}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
}

export default Pagination;
