import styles from './OneDayForecast.module.css';
import ForecastCard from '../ForecastCard/ForecastCard';

const OneDayForecast = ({ forecast }) => {
  return (
    <div>
        <div className={ styles.inner } >

            { forecast.map(((item, index) => {
                return (
                    <ForecastCard 
                        key={ index } 
                        item= { item }
                    />
                );
            }))}

        </div>
    </div>
  )
}

export default OneDayForecast
