import { NavLink } from "react-router-dom";
import styles from "./FooterLogo.module.css";

function FooterLogo({ imgSrc = "vite.svg", alt = "logo", logoText }) {
  return (
    <div className={styles.logo}><NavLink to="/">
      {imgSrc ? (
        <img src={imgSrc} alt={alt} />
      ) : (
        logoText && <span className={styles.logoText}>{logoText}</span>
      )}</NavLink>
    </div>
    
  );
}

export default FooterLogo;
