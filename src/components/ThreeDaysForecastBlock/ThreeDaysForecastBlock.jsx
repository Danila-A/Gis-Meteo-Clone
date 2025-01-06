import styles from './ThreeDaysForecastBlock.module.css';
import app from '../../data/content';
import ForecastCard from '../ForecastCard/ForecastCard';

const ThreeDaysForecastBlock = ({ day }) => {
  return (
    <div className={ styles.container } >
      <div>

        <div className={ styles.title }>
          { day[0].date }
        </div>

        <div className={ styles.data } >
          { day.map((item, index) => {
            return (
              <ForecastCard 
                key={ index }
                item={ item } 
              />
            )
          })}
        </div>
        
      </div>
    </div>
  )
}

export default ThreeDaysForecastBlock;
