import styles from './styles.module.css';
import header from '../../data/content';
import { useDispatch, useSelector } from 'react-redux';
import { changeKindForecast } from '../../store/dataSlice';


const HeaderTimePointsList = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.data.forecast);

    const handleClick = (event) => {
        dispatch(changeKindForecast({ kindForecast: Number(event.target.getAttribute('data-value')) }));
    }

    return (
        <div className={ styles.wrapper }>
            <ul className={ styles.list }>

                {weatherData ? (header.headerBottom.forecastPoints?.map((point, index) => {
                    return (
                        <li 
                            className={ styles.listItem } 
                            key={ index }>
                                <a 
                                    data-value={ point.value }
                                    onClick={(event) => handleClick(event)} >
                                        { point.text }
                                </a>
                        </li>
                    );
                })) : null }             
            </ul>
        </div>
    );
}

export default HeaderTimePointsList;
