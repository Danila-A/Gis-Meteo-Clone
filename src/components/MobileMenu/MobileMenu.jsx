import header from '../../data/content';
import CloseIcon from '../../icons/CloseIcon/CloseIcon';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ weatherData, setIsVisible, setKindForecast, root }) => {

    const handleClick = (event) => {
        setKindForecast(Number(event.target.getAttribute('data-value')));
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