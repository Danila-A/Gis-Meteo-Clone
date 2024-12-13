import header from '../../data/content';
import CloseIcon from '../../icons/CloseIcon/CloseIcon';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ weatherData, setIsVisible }) => {

    const handleClick = (event) => {
        console.log(event.target.getAttribute('data-value'));
    }

    return (
    <div className={ styles.menu }>
        <div className={ styles.inner }>
            <CloseIcon  setIsVisible={ setIsVisible }/>
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
    )
}

export default MobileMenu