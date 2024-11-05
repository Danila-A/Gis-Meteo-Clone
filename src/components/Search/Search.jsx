import styles from './styles.module.css';
import header from '../../data/content';

const Search = () => {
    return (
        <div className="">
            <input type="text" placeholder={ header.headerBottom.searchPlaceHolder } />
        </div>
    );
}

export default Search;
