import styles from "./FooterAbout.module.css";

function FooterAbout({ heading, children, text }) {
  return (
    <div className={styles.about}>
      {heading && <h3 className={styles.heading}>{heading}</h3>}
      {children ?? (text && <p>{text}</p>)}
    </div>
  );
}

export default FooterAbout;
