import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Hero.module.css";

function Hero({
  imgSrc,
  heading,
  paragraph,
  ctaText = "Shop Now",
  ctaLink = "/products?page=1",
  bgColor,
}) {
  const navigate = useNavigate();

  return (
    <section
      className={styles.hero}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <img className={styles.bgImage} src={imgSrc} alt="hero-img" />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        <Button type="cta" onClick={() => navigate(ctaLink)}>
          {ctaText}
        </Button>
      </div>
    </section>
  );
}

export default Hero;
