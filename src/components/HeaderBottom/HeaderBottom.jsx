import { useState } from 'react';
import BurgerIcon from '../../icons/BurgerIcon/BurgerIcon';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import HeaderTimePointsList from '../HeaderTimePointsList/HeaderTimePointsList';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './styles.module.css';

const HeaderBottom = ({ setData, weatherData }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={ styles.headerBottom}>
            <div className={ styles.inner }>
                <HeaderSearch setData={ setData }/>
                <HeaderTimePointsList weatherData={ weatherData } />
                
                <BurgerIcon handleClick={ handleClick }/>
                { isVisible ? <MobileMenu weatherData={ weatherData } setIsVisible={ setIsVisible }/> : null }
            </div>
        </div>
    );
}

export default HeaderBottom;
