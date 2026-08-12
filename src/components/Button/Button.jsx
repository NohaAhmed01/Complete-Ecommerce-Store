import styles from './Button.module.css'
function Button({children, onClick, type, htmlType = "button", disabled = false}) {
    return (
        <button type={htmlType} onClick={onClick} disabled={disabled} className={`${styles.btn} ${styles[type]} ${disabled ? styles.disabled : ""}`}>
            {children}
        </button>
    )
}

export default Button
