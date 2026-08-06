import styles from './Button.module.css'
function Button({children, onClick, type, htmlType = "button"}) {
    return (
        <button type={htmlType} onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    )
}

export default Button
