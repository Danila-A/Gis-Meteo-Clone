import styles from './styles.module.css';
import Search from "../Search/Search";
import { useEffect, useRef, useState } from 'react';
import useFetch from '../../scripts/hooks/useFetch';

const HeaderSearch = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [data, setData] = useState(null);

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

    const handleSubmit = (event) => {
        // event.preventDefault();
        // const location = ;
        setData(location);
    }

    return (
        <>
            <div className={ styles.wrapper }>
                <div className={ styles.search } style={ isFocus ? { minWidth: '400px' } : null}>
                    <Search ref={ searchRef } onFocus={ handleOnFocus } onSubmit={ handleSubmit }/>  
                </div>
            </div>
            <div className={ styles.backbround } style={ isFocus ? { opacity: 1, zIndex: 2} : null}></div>
        </>
        
    );
}

export default HeaderSearch;
