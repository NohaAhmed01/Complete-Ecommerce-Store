import styles from './OurStory.module.css'

function OurStory({ children, heading, imgSrc, Order, bgColor }) {
    const sectionStyle = bgColor ? { backgroundColor: bgColor } : undefined;
    const directionClass = Order === 0 ? styles.row : styles.rowReverse;

    return (
        <section className={`${styles.section} ${directionClass}`} style={sectionStyle}>
            <div className={styles.text}>
                <h2>{heading}</h2>
                <div>{children}</div>
            </div>
            <div className={styles.image}>
                <img src={imgSrc} alt="ourStory-img" />
            </div>
        </section>
    )
}

export default OurStory
