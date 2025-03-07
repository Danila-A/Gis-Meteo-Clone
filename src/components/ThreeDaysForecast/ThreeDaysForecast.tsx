import { DayBlock } from '../../interfaces';
import { ThreeDaysForecastBlock } from '../ThreeDaysForecastBlock/ThreeDaysForecastBlock';
import styles from './ThreeDaysForecast.module.scss';

interface Props {
    forecast: DayBlock[];
}

export const ThreeDaysForecast: React.FC<Props> = ({ forecast }) => {
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
