import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 30);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled || menuOpen ? styles.scrolled : ""}`}
    >
      <NavLink
        to="/"
        className={styles.logoLink}
        onClick={() => setMenuOpen(false)}
      >
        <img className={styles.logo} src={logo} alt="Terra Shop logo" />
      </NavLink>

      <button
        type="button"
        className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.navList} ${menuOpen ? styles.navOpen : ""}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="products?page=1">Products</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
