import styles from './styles.module.css';
import { Search } from "../Search/Search";
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchForecast } from '../../store/dataSlice';


export const HeaderSearch = () => {
    const [isFocus, setIsFocus] = useState(false);
    const searchRef = useRef<HTMLInputElement>();   
    const dispatch = useDispatch();  
    const body = document.querySelector<HTMLBodyElement>('body')!;

    useEffect(()=> {
        const handler = (event: Event) => {
            if(searchRef.current != event.target) {
                body.style.overflow = 'visible';              
                setIsFocus(false);
            }
        }
        
        document.addEventListener('click', handler);
    }, [searchRef])

    const handleOnFocus = () => {
        setIsFocus(true);
        body.style.overflow = 'hidden';
    }  

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        
        if(searchRef.current) {
            const city = searchRef.current.value;
            setIsFocus(false); 
            
            searchRef.current.value = '';
            searchRef.current.blur();
            body.style.overflow = 'visible'; 
            city && city.trim() ? dispatch(fetchForecast(city)) : null;
        }        
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
            <div className={ styles.background } style={ isFocus ? { opacity: 1, zIndex: 2} : null}></div>
        </>
    );
}
