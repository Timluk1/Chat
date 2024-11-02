import SearchIcon from "assets/icons/search.svg";
import styles from "./search.module.scss";

export function Search() {
    return (
        <div className={styles.search}>
            <img className={styles.search__icon} src={SearchIcon} alt="search" />
            <input className={styles.search__input} type="text" placeholder="Search" />
        </div>
    );
}
