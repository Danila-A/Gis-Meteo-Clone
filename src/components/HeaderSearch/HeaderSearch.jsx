import styles from './styles.module.css';
import Search from "../Search/Search";
import { useEffect, useRef, useState } from 'react';

const HeaderSearch = ({ setData, body }) => {
    const [isFocus, setIsFocus] = useState(false);
    const searchRef = useRef();   

    const handleOnFocus = () => {
        setIsFocus(true);
        body.style.overflow = 'hidden';
    }   

    useEffect(()=> {
        const handler = (event) => {

            if(searchRef.current != event.target) {
                setIsFocus(false);
                body.style.overflow = 'visible';
            }
        }

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        } 
    }, [searchRef])

    const handleSubmit = (event) => {
        event.preventDefault();

        const location = searchRef.current.value;
        setIsFocus(false); 
        
        searchRef.current.value = '';
        searchRef.current.blur();      
        location && location.trim() ? setData(location) : null;
    }

    return (
        <>
            <div className={ styles.wrapper }>
                <div className={ styles.search } style={ isFocus && window.innerWidth > 430 ? { minWidth: '400px' } : null}>
                    <Search 
                        ref={ searchRef } 
                        onFocus={ handleOnFocus } 
                        onSubmit={ handleSubmit }
                    />  
                </div>
            </div>
            <div className={ styles.backbround } style={ isFocus ? { opacity: 1, zIndex: 2} : null}></div>
        </>
    );
}

export default HeaderSearch;
