import styles from './HeaderSearch.module.scss';
import { Search } from "../Search/Search";
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setCity } from '../../store/Slices/dataSlice';


export const HeaderSearch: React.FC = () => {
    const [isFocus, setIsFocus] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);   
    const dispatch = useAppDispatch();  
    const body = document.querySelector<HTMLBodyElement>('body');

    useEffect(()=> {
        const handler = (event: Event) => {
            if(searchRef.current != event.target) {
                setIsFocus(prev => {
                    if(!prev) return prev;
                    if(body) body.classList = 'yes-scroll';
                    return false;
                });
            }
        }
        
        document.addEventListener('click', handler);
    }, [searchRef]);

    const handleOnFocus = () => {
        setIsFocus(true);
        if(body) body.classList = 'no-scroll';
    }  

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        
        if(searchRef.current) {
            const city = searchRef.current.value;
            setIsFocus(false); 
            
            searchRef.current.value = '';
            searchRef.current.blur();
            if(body) body.classList = 'yes-scroll';
            city && city.trim() ? dispatch(setCity(city)) : null;
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
