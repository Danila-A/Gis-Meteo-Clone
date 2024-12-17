import styles from './OneDayForecast.module.css';
import app from '../../data/content'
import ForecastCard from '../ForecastCard/ForecastCard';

const OneDayForecast = ({ hourList, kindForecast }) => {
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
