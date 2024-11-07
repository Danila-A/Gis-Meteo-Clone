import styles from './styles.module.css';
import Search from "../Search/Search";
import { useState } from 'react';

const HeaderSearch = () => {
    const [isFocus, setIsFocus] = useState(false);

    const handleOnFocus = () => {
        setIsFocus(true);
    }

    return (
        <>
            <div className={ styles.wrapper }>
                <div className={ isFocus ? styles.searchFocus : styles.search }>
                {/* <div className={ styles.search } style={ isFocus ? { ...styles.search, minWidth: '400px' } : null}> */}
                    <Search onFocus={ handleOnFocus } />  
                </div>
            </div>
            <div className={ isFocus ? styles.backbroundFocus : styles.backbround }></div>
        </>
        
    );
}

export default HeaderSearch;
