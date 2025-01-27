import { ThreeDaysForecastBlock } from '../ThreeDaysForecastBlock/ThreeDaysForecastBlock';
import styles from './ThreeDaysForecast.module.css';

export const ThreeDaysForecast = ({ forecast }) => {
    return (
    <div>
        <div className={ styles.inner }>
            {
                forecast.map((item, index) => {
                    return (
                        <ThreeDaysForecastBlock 
                            key={ index }    
                            day={ item } 
                        />
                    )
                })
            }
        </div>
    </div>
    )
}
