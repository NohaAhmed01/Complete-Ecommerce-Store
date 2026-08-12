import FooterLogo from "../FooterLogo/FooterLogo";
import FooterAbout from "../FooterAbout/FooterAbout";
import FooterNav from "../FooterNav/FooterNav";
import styles from "./Footer.module.css";

const defaultNavLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products?page=1" },
  { label: "Checkout", to: "/checkout" },
  { label: "About", to: "/about" },
];

function Footer({
  logoSrc,
  logoAlt = "B Pretty logo",
  logoText = "B Pretty",
  aboutHeading = "Our Goal",
  aboutText = "To empower everyone to look and feel their best with premium beauty products, personalized care, and a shopping experience that puts you first.",
  navHeading = "Explore",
  navLinks = defaultNavLinks,
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <FooterLogo imgSrc={'https://img.icons8.com/ios11/600/F25081/react.png'} alt={logoAlt} logoText={logoText} />
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
