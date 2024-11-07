import styles from './styles.module.css';
import header from '../../data/content';
import { forwardRef } from 'react';

const Search = forwardRef( 
    ({ onFocus }, ref) => {
        return (
            <div className="">
                <input ref={ ref } onFocus={ onFocus } className={ styles.input } type="text" placeholder={ header.headerBottom.searchPlaceHolder } />
            </div>
        );
    }
)

export default Search;
