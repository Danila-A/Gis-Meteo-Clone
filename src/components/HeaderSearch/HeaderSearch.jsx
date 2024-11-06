import styles from './styles.module.css';
import Search from "../Search/Search";

const HeaderSearch = () => {
    return (
        <div className={ styles.wrapper }>
            <Search />
        </div>
    );
}

export default HeaderSearch;
