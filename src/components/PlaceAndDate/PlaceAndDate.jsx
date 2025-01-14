import styles from './PlaceAndDate.module.css';
import contentData from '../../data/content.json'

const PlaceAndDate = ({ date, city }) => {
  return (
    <div className={ styles.placeAndDate }>
        <h3 className={ styles.date }>
            { contentData.body.dateTitle } { date }
        </h3>
        <h1>{ city }</h1>
    </div>
  )
}

export default PlaceAndDate;
