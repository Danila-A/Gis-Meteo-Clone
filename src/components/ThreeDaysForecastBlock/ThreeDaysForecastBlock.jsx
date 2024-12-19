import styles from './ThreeDaysForecastBlock.module.css';
import app from '../../data/content';
import ForecastCard from '../ForecastCard/ForecastCard';

const ThreeDaysForecastBlock = ({ day }) => {
  return (
    <div className={ styles.container } >
      <div>

        <div className={ styles.title }>
          <h3>{ app.body.daysOfWeek[new Date(day.date).getDay()] + ' ' + day.date }</h3>
        </div>

        <div className={ styles.data } >
          { day.hour.map((item, index) => {
            return (
              <ForecastCard 
                key={ index }
                item={ item } 
                dayTime={ app.body.dayTime[index] }
              />
            )
          })}
        </div>
        
      </div>
    </div>
  )
}

export default ThreeDaysForecastBlock;
