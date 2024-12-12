import styles from './styles.module.css';
import header from '../../data/content';

const HeaderTimePointsList = ({ weatherData }) => {

    const handleClick = (event) => {
        console.log(event.target.getAttribute('data-date'));
    }

    return (
        <div className={ styles.wrapper }>
            <ul className={ styles.list }>

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
    );
}

export default HeaderTimePointsList;
