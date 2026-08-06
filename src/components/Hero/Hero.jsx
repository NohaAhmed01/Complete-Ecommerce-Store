import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Hero.module.css";

function Hero({
  imgSrc,
  heading,
  paragraph,
  ctaText = "Shop Now",
  ctaLink = "/products?page=1",
}) {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <img className={styles.bgImage} src={imgSrc} alt="" />
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
