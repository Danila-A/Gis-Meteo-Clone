import styles from './styles.module.scss';
import contentData from '../../data/content.json'
import { changeKindForecast, selectForecast } from '../../store/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


export const HeaderTimePointsList = () => {
    const dispatch = useAppDispatch();
    const weatherData = useAppSelector(selectForecast);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const link: HTMLAnchorElement = event.target as HTMLAnchorElement;
        dispatch(changeKindForecast(Number(link?.getAttribute('data-value'))));
    }

    return (
        <div className={ styles.wrapper }>
            <ul className={ styles.list }>

                {weatherData && (contentData.headerBottom.forecastPoints?.map((point, index) => {
                    return (
                        <li 
                            key={ index }    
                            className={ styles.listItem }
                        >
                            <a
                                className={ styles.button }
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
    );
}
