import { useEffect, useState } from 'react';
import BurgerIcon from '../../icons/BurgerIcon/BurgerIcon';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import HeaderTimePointsList from '../HeaderTimePointsList/HeaderTimePointsList';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './styles.module.css';

const HeaderBottom = ({ setData, weatherData, setKindForecast }) => {
    const [isVisible, setIsVisible] = useState(false);   
    const body = document.querySelector('body');
    const root = document.querySelector('#root');

    isVisible ? root.style.overflow = 'hidden' : null;

    useEffect(() => {
        console.log(root.style.overflow);
    }, [isVisible]);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={ styles.headerBottom}>
            <div className={ styles.inner }>

                <HeaderSearch 
                    setData={ setData } 
                    body={ body } 
                />
                <HeaderTimePointsList 
                    weatherData={ weatherData } 
                    setKindForecast={ setKindForecast }
                />
                <BurgerIcon handleClick={ handleClick }/>

                { 
                    isVisible ? 
                        <MobileMenu 
                            weatherData={ weatherData } 
                            setIsVisible={ setIsVisible } 
                            setKindForecast={ setKindForecast }
                            root={ root }
                        /> 
                    : 
                        null 
                }
            </div>
        </div>
    );
}

export default HeaderBottom;
