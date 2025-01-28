import styles from './ThreeDaysForecastBlock.module.css';
import { ForecastCard } from '../ForecastCard/ForecastCard';
import { DayHours } from '../../interfaces';
import React from 'react';

interface Props {
  day: DayHours[];
}

export const ThreeDaysForecastBlock: React.FC<Props> = ({ day }) => {
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
