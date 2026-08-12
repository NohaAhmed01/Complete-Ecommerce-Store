import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import Button from "../components/Button/Button";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setItem(data);
      } catch (err) {
        setError(err.message);
        setItem(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (isLoading) return <LoadingSpinner />;
  if (error || !item) {
    return (
      <div className={styles.page}>
        <p className={styles.error}>{error ?? "Product not found"}</p>
      </div>
    );
  }

  const hasDiscount = item.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? item.price - (item.price * item.discountPercentage) / 100
    : item.price;

  const isOutOfStock =
    item.stock === 0 || item.availabilityStatus === "Out of Stock";
  const isLowStock =
    !isOutOfStock &&
    (item.availabilityStatus === "Low Stock" || item.stock <= 10);

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <ProductGallery images={item.images} title={item.title} />

        <div className={styles.details}>
          <h1 className={styles.title}>{item.title}</h1>

          <div className={styles.priceRatingRow}>
            <div className={styles.priceGroup}>
              {hasDiscount ? (
                <>
                  <span className={styles.originalPrice}>
                    ${item.price.toFixed(2)}
                  </span>
                  <span className={styles.discountedPrice}>
                    ${discountedPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className={styles.discountedPrice}>
                  ${item.price.toFixed(2)}
                </span>
              )}
            </div>
            <span className={styles.rating}>{item.rating} / 5</span>
          </div>

          <p className={styles.description}>{item.description}</p>

          <div className={styles.infoRow}>
            <div className={styles.infoBlock}>
              <h3>Warranty</h3>
              <p>{item.warrantyInformation}</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Shipping</h3>
              <p>{item.shippingInformation}</p>
            </div>
          </div>

          {isOutOfStock ? (
            <p className={styles.outOfStock}>Out of Stock</p>
          ) : isLowStock ? (
            <p className={styles.lowStock}>
              Low stock — only {item.stock} left!
            </p>
          ) : (
            item.availabilityStatus === "In Stock" && (
              <p className={styles.inStock}>{item.availabilityStatus}</p>
            )
          )}

          <Button type="addToCart" disabled={isOutOfStock}>
            Add To Cart
          </Button>
        </div>
      </div>

      <ProductReviews reviews={item.reviews} />
    </div>
  );
}

export default ProductDetail;
