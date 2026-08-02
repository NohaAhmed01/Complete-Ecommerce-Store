import styles from './OurStory.module.css'
function OurStory({children, heading, imgSrc, Order}) {
    return (
        <section className={styles.section} style={Order === 0 ? {flexDirection: "row"}:{flexDirection: "row-reverse"}}>
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
