import styles from './styles.module.css';
import Search from "../Search/Search";
import { useEffect, useRef, useState } from 'react';
import useFetch from '../../scripts/hooks/useFetch';

const HeaderSearch = ({ setData }) => {
      
    const [isFocus, setIsFocus] = useState(false);
    const searchRef = useRef();
    
    const handleOnFocus = () => {
        setIsFocus(true);
    }

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
        event.preventDefault();

        const location = searchRef.current.value;
        setIsFocus(false); 
        searchRef.current.blur();      
        setData(location);
    }

    return (
        <>
            <div className={ styles.wrapper }>
                <div className={ styles.search } style={ isFocus ? { minWidth: '400px' } : null}>
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
