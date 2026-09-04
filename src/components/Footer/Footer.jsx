import FooterLogo from "../FooterLogo/FooterLogo";
import FooterAbout from "../FooterAbout/FooterAbout";
import FooterNav from "../FooterNav/FooterNav";
import styles from "./Footer.module.css";

const defaultNavLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products?page=1" },
  { label: "About", to: "/about" },
  { label: "Cart", to: "/cart" }
];

function Footer({
  logoSrc = '/logo.png',
  logoAlt = "Terra Shop logo",
  logoText = "Terra Shop",
  aboutHeading = "Our Goal",
  aboutText = "To provide quality products at unbeatable prices and a shopping experience that puts you first.",
  navHeading = "Explore",
  navLinks = defaultNavLinks,
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <FooterLogo imgSrc={logoSrc} alt={logoAlt} logoText={logoText} />
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.right}>
          <FooterAbout heading={aboutHeading} text={aboutText} />
          <FooterNav heading={navHeading} links={navLinks} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
