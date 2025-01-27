import contentData from '../../data/content.json'
import styles from './MobileMenu.module.css';
import { CloseIcon } from '../../icons/CloseIcon/CloseIcon';
import { useDispatch, useSelector } from 'react-redux';
import { changeKindForecast } from '../../store/dataSlice';

export const MobileMenu = ({ setIsVisible }) => {
    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.data.forecast);

    const handleClick = (event) => {
        dispatch(changeKindForecast( { kindForecast: Number(event.target.getAttribute('data-value')) }));
        setIsVisible(false);
    }

    return (
        <>
            <div className={ styles.menu }>
                <div className={ styles.inner }>

                    <CloseIcon setIsVisible={ setIsVisible } />

                    <ul className={ styles.menuList }>
                        {weatherData && (contentData.headerBottom.forecastPoints?.map((point, index) => {
                            return (
                                <li 
                                    className={ styles.listItem } 
                                    key={ index }>
                                        <a 
                                            data-value={ point.value }
                                            onClick={ (event) => handleClick(event) }
                                        >
                                            { point.text }
                                        </a>
                                </li>
                            );
                        }))}
                    </ul>

                </div>
            </div>
        </>                
    )
}
