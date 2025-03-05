import styles from './PlaceAndDate.module.scss';
import contentData from '../../data/content.json'

interface Props {
  date?: string;
  city?: string;
}

export const PlaceAndDate: React.FC<Props> = ({ date, city }) => {
  return (
    <div className={ styles.placeAndDate }>
        <h3 className={ styles.date }>
            { contentData.body.dateTitle } { date }
        </h3>
        <h1>{ city }</h1>
    </div>
  )
}
