import styles from "./FooterLogo.module.css";

function FooterLogo({ imgSrc = "vite.svg", alt = "logo", logoText }) {
  return (
    <div className={styles.logo}>
      {imgSrc ? (
        <img src={imgSrc} alt={alt} />
      ) : (
        logoText && <span className={styles.logoText}>{logoText}</span>
      )}
    </div>
  );
}

export default FooterLogo;
