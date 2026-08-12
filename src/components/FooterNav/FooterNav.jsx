import { NavLink } from "react-router-dom";
import styles from "./FooterNav.module.css";

function FooterNav({ links = [], heading = "Quick Links" }) {
  return (
    <nav className={styles.nav}>
      {heading && <h4 className={styles.heading}>{heading}</h4>}
      <ul className={styles.list}>
        {links.map(({ label, to }) => (
          <li key={to}>
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterNav;
