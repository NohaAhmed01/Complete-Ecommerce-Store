import styles from "./ProductReviews.module.css";

function ProductReviews({ reviews = [] }) {
  if (reviews.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Customer Reviews</h2>
      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <article key={`${review.reviewerEmail}-${index}`} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.reviewer}>{review.reviewerName}</span>
              <span className={styles.rating}>{review.rating} / 5</span>
            </div>
            <p className={styles.comment}>{review.comment}</p>
            <time className={styles.date} dateTime={review.date}>
              {new Date(review.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductReviews;
