import styles from './OneDayForecast.module.css';
import ForecastCard from '../ForecastCard/ForecastCard';

const OneDayForecast = ({ hourList }) => {
  return (
    <div>
        <div className={ styles.inner } >

            { hourList.map(((item, index) => {
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
