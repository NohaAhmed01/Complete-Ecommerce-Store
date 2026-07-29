import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {
    return (
        <ul className={styles.navbar}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
            <li><NavLink to="checkout">Checkout</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
        </ul>
    )
}

export default Navbar
