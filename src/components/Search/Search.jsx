import styles from './styles.module.css';
import header from '../../data/content';

const Search = ({ onFocus }) => {
    return (
        <div className="">
            <input onFocus={ onFocus } className={ styles.input } type="text" placeholder={ header.headerBottom.searchPlaceHolder } />
        </div>
    );
}

export default Search;
