import styles from './ThreeDaysForecastBlock.module.css';
import app from '../../data/content';
import ForecastCard from '../ForecastCard/ForecastCard';

const ThreeDaysForecastBlock = ({ day }) => {

  console.log(day);

  return (
    <div style={{flexGrow: 1, marginRight: '10px'}}>
      <div className="">

        <div className="">
          <h3>{ app.body.daysOfWeek[new Date(day.date).getDay()] + ' ' + day.date }</h3>
        </div>

        <div className="" style={{ display: 'flex'}}>
          { day.hour.map((item, index) => {
            return (
              <ForecastCard 
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
