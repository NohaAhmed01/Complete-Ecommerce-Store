import styles from './SearchBar.module.css'
import { useProducts } from '../../contexts/ProductsContext';
function SearchBar() {
    const { search, setSearch } = useProducts();
    return (
        <div className={styles.searchBarContainer}>
            <input className={styles.searchBar} type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}

export default SearchBar
