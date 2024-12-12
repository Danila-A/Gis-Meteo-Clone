import header from '../../data/content';
import CloseIcon from '../../icons/CloseIcon/CloseIcon';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ weatherData, setIsVisible }) => {

    const handleClick = (event) => {
        console.log(event.target.getAttribute('data-date'));
    }

    return (
    <div className={ styles.menu }>
        <div className={ styles.inner }>
            <CloseIcon  setIsVisible={ setIsVisible }/>
            <ul>
                {weatherData ? (header.headerBottom.timePoints?.map((item, index) => {
                    return (
                        <li 
                            className={ styles.listItem } 
                            key={ index }>
                                <a 
                                    data-date={ weatherData.forecast.forecastday[index].date }
                                    onClick={(event) => handleClick(event)}>
                                        { item }
                                </a>
                        </li>
                    );
                })) : null }
            </ul>
        </div>
    </div>
    )
}

export default MobileMenu