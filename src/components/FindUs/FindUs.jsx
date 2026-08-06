import styles from "./FindUs.module.css";

function FindUs({
  heading = "Find Us",
  description = "Visit our store or get directions using the map below.",
  address = ["123 Beauty Lane", "Cairo, Egypt"],
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.789!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMOMCsMDInMzkuOCJOIDMxJzA4LjQiRQ!5e0!3m2!1sen!2seg!4v1234567890",
  mapTitle = "Store location on Google Maps",
  mapHeight = "400",
}) {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h2>{heading}</h2>
        <p>{description}</p>
        <address className={styles.address}>
          {address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
      </div>

      <div className={styles.mapWrapper}>
        <iframe
          src={mapEmbedUrl}
          title={mapTitle}
          height={mapHeight}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default FindUs;
