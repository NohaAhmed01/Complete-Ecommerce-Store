import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./ProductItem.module.css";

function ProductItem({ item }) {
  const { title, price, description, images } = item;
  const [textSpreaded, setTextSpreaded] = useState(false);

  return (
    <div className={styles.productCard}>
      <Link to={`/products/${item.id}`} >
        <div className={styles.productImgContainer}>
          <img className={styles.mainImage} src={images[0]} alt={title} />
          {images.length > 1 ? (
            <img className={styles.hoverImage} src={images[1]} alt={title} />
          ) : (
            <img className={styles.hoverImage} src={images[0]} alt={title} />
          )}
        </div>
      </Link>
      <div className={styles.productDetails}>
        <h3>{title}</h3>
        <p>
          {textSpreaded
            ? description
            : description.split(".").slice(0, 1).join(" ") + "... "}
          <span
            className={styles.textSpreader}
            onClick={() => setTextSpreaded((t) => !t)}
          >
            {textSpreaded ? "see less" : "see more..."}
          </span>
        </p>
        <div>${price}</div>
        <Button type="addToCart">Add To Cart</Button>
      </div>
    </div>
  );
}

export default ProductItem;
