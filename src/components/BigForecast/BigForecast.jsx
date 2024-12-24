import ForecastCard from '../ForecastCard/ForecastCard';
import styles from './BigForecast.module.css';

const BigForecast = ({ forecast }) => {
  return (
    <div>
        <div className={ styles.inner } >
          
            { forecast.map((item, index) => (
                <ForecastCard 
                    key={ index }
                    item={ item } 
                />    
            ))}
            
        </div>
    </div>
  )
}

export default BigForecast;
