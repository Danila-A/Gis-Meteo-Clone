import styles from './OneDayForecast.module.scss';
import { ForecastCard } from '../ForecastCard/ForecastCard';
import { HourList } from '../../interfaces';

interface Props {
    forecast?: HourList[];
}

export const OneDayForecast: React.FC<Props> = ({ forecast }) => {
  return (
    <div>
        <div className={ styles.inner } >

            { forecast?.map(((item, index) => {
                return (
                    <ForecastCard 
                        key={ index } 
                        item= { item }
                    />
                );
            }))}

        </div>
    </div>
  );
}
