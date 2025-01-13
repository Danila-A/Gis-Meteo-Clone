import header from '../../data/content';
import CloseIcon from '../../icons/CloseIcon/CloseIcon';
import styles from './MobileMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeKindForecast } from '../../store/dataSlice';

const MobileMenu = ({ setIsVisible, root }) => {
    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.data.forecast);

    const handleClick = (event) => {
        dispatch(changeKindForecast( { kindForecast: Number(event.target.getAttribute('data-value')) }));
        setIsVisible(false);
        root.style.overflow = 'visible';
    }

    return (
        <>
            <div className={ styles.menu }>
                <div className={ styles.inner }>
                    <CloseIcon  
                        setIsVisible={ setIsVisible } 
                        root={ root }
                    />
                    <ul className={ styles.menuList }>
                        {weatherData ? (header.headerBottom.forecastPoints?.map((point, index) => {
                            return (
                                <li 
                                    className={ styles.listItem } 
                                    key={ index }>
                                        <a 
                                            data-value={ point.value }
                                            onClick={(event) => handleClick(event)}>
                                                { point.text }
                                        </a>
                                </li>
                            );
                        })) : null }
                    </ul>
                </div>
            </div>
            <div className={ styles.background }></div>
        </>                
    )
}

export default MobileMenu
