import styles from './styles.module.css';
import Search from "../Search/Search";
import { useEffect, useRef, useState } from 'react';

const HeaderSearch = () => {
    const [isFocus, setIsFocus] = useState(false);

    const handleOnFocus = () => {
        setIsFocus(true);
    }

    const searchRef = useRef();

    useEffect(()=> {
        const handler = (event) => {

            if(searchRef.current != event.target) {
                setIsFocus(false);
            }
        }

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        } 
    }, [searchRef])

    return (
        <>
            <div className={ styles.wrapper }>
                <div className={ styles.search } style={ isFocus ? { minWidth: '400px' } : null}>
                    <Search ref={ searchRef } onFocus={ handleOnFocus } />  
                </div>
            </div>
            <div className={ styles.backbround } style={ isFocus ? { opacity: 1, zIndex: 2} : null}></div>
        </>
        
    );
}

export default HeaderSearch;
