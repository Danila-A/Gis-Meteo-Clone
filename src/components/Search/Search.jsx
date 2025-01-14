import styles from './search.module.css';
import contentData from '../../data/content.json';
import { forwardRef } from 'react';

const Search = forwardRef( 
    ({ onFocus, onSubmit }, ref) => {

        return (
            <div>
                <form action="" onSubmit={(event) => onSubmit(event)}>
                    <input 
                        ref={ ref } 
                        onFocus={ onFocus } 
                        className={ styles.input } 
                        type="text" 
                        placeholder={ contentData.headerBottom.searchPlaceHolder } 
                    />
                </form>
            </div>
        );
    }
)

export default Search;
