import { useState } from "react";
import styles from "./ProductGallery.module.css";

function ProductGallery({ images = [], title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryImages = images.length > 0 ? images : [];

  if (galleryImages.length === 0) return null;

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <img
          src={galleryImages[activeIndex]}
          alt={`${title} - image ${activeIndex + 1}`}
        />
      </div>
      {galleryImages.length > 1 && (
        <div className={styles.thumbnails}>
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`${styles.thumbnail} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image} alt={`${title} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
