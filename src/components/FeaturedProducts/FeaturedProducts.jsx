import { useProducts } from "../../contexts/ProductsContext";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./FeaturedProducts.module.css";

function FeaturedProducts({ heading, category, bgColor }) {
  const {products} = useProducts();
  const featured = products.filter((p) => p.category === category).slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section
      className={styles.section}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.grid}>
        {featured.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
