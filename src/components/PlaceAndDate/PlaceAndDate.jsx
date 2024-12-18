import styles from './PlaceAndDate.module.css';
import app from '../../data/content'

const PlaceAndDate = ({ date, city }) => {
  return (
    <div className={ styles.placeAndDate }>
        <h3 className={ styles.date }>
            { app.body.dateTitle } { date }
        </h3>
        <h1>{ city }</h1>
    </div>
  )
}

export default PlaceAndDate;
