import styles from './HeaderTimePointsList.module.scss';
import contentData from '../../data/content.json'
import { setKindForecast } from '../../store/Slices/dataSlice';
import { useAppDispatch } from '../../store/hooks';

export const HeaderTimePointsList = () => {
    const dispatch = useAppDispatch();
    
    const handleClick = (kindForecast: number) => {
        dispatch(setKindForecast(kindForecast));
    }

    return (
        <div className={ styles.wrapper }>
            <ul className={ styles.list }>

                {contentData.headerBottom.forecastPoints?.map((point, index) => {
                    return (
                        <li 
                            key={ index }    
                            className={ styles.listItem }
                        >
                            <a
                                className={ styles.button }
                                onClick={ () => handleClick(point.value) }
                            >
                                { point.text }
                            </a>
                        </li>
                    );
                })}    

            </ul>
        </div>
    );
}
