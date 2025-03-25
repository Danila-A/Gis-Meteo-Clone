import styles from './Search.module.scss';
import contentData from '../../data/content.json';
import { FC, useEffect } from 'react';
import { InputProps } from '../../interfaces';

export const Search: FC<InputProps> = ({register, required, setIsFocus, pattern, isFocus, body}) => {
    
    let input: HTMLInputElement | null;

    useEffect(() => {
        input = document.querySelector<HTMLInputElement>(`.${styles.input}`);
        !isFocus && input?.blur();
        console.log(isFocus);
        
    }, []);

    useEffect(()=> {
        const handler = (event: Event) => {
            if(input != event.target) {
                console.log('inside in the condition');
                
                body.style.overflow = 'visible';              
                setIsFocus(false);
            }
        }
        document.addEventListener('click', handler);
    }, []);

    const handleOnFocus = () => {
        setIsFocus(true);
        body.style.overflow = 'hidden';
    }

    return (
        <div>
            <input
                {...register('cityName', { required, pattern })}
                onFocus={ handleOnFocus } 
                className={ styles.input } 
                placeholder={ contentData.headerBottom.searchPlaceHolder }
                type="text"
            />
        </div>
    );
}
