import styles from './AboutIntro.module.css'


function AboutIntro({heading, children, imgSrc}) {
    return (
        <section className={styles.heading}>
            <img src={imgSrc} alt="heading-img" />
            <div className={styles.text}>
                <h2>{heading}</h2>
                <span>{children}</span>
            </div>
        </section>
    )
}

export default AboutIntro
