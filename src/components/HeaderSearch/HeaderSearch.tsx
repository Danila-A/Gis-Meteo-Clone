import styles from './HeaderSearch.module.scss';
import { Search } from "../Search/Search";
import { FormEvent, useEffect, useRef, useState } from 'react';
import { fetchForecast } from '../../store/dataSlice';
import { useAppDispatch } from '../../store/hooks';


export const HeaderSearch: React.FC = () => {
    const [isFocus, setIsFocus] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);   
    const dispatch = useAppDispatch();  
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

    const handleSubmit = (event: FormEvent) => {
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
                <div className={ styles.search } style={ isFocus && window.innerWidth > 430 ? { minWidth: '400px' } : undefined}>

                    <Search 
                        ref={ searchRef } 
                        onFocus={ handleOnFocus } 
                        onSubmit={ handleSubmit }
                    />  

                </div>
            </div>
            <div className={ styles.background } style={ isFocus ? { opacity: 1, zIndex: 2} : undefined}></div>
        </>
    );
}
