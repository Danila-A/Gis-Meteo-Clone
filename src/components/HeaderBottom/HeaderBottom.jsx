import { useState } from 'react';
import BurgerIcon from '../../icons/BurgerIcon/BurgerIcon';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import HeaderTimePointsList from '../HeaderTimePointsList/HeaderTimePointsList';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './styles.module.css';

const HeaderBottom = () => {
    const [isVisible, setIsVisible] = useState(false);   
    const body = document.querySelector('body');
    const root = document.querySelector('#root');

    // It must will be checked with a real smartphone (11th line too)
    // Mobile menu
    isVisible ? root.style.overflow = 'hidden' : null;

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={ styles.headerBottom}>
            <div className={ styles.inner }>

                <HeaderSearch body={ body } />
                <HeaderTimePointsList />
                <BurgerIcon handleClick={ handleClick }/>

                {isVisible &&
                        <MobileMenu  
                            setIsVisible={ setIsVisible } 
                            root={ root }
                        />}
            </div>
        </div>
    );
}

export default HeaderBottom;
