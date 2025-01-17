import { useState } from 'react';
import BurgerIcon from '../../icons/BurgerIcon/BurgerIcon';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import HeaderTimePointsList from '../HeaderTimePointsList/HeaderTimePointsList';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './styles.module.css';

const HeaderBottom = () => {
    const [isVisible, setIsVisible] = useState(false);   
    
    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={ styles.headerBottom}>
            <div className={ styles.inner }>

                <HeaderSearch />
                <HeaderTimePointsList />

                <BurgerIcon handleClick={ handleClick }/>
                {
                    isVisible && <MobileMenu setIsVisible={ setIsVisible } />
                }

            </div>
        </div>
    );
}

export default HeaderBottom;
