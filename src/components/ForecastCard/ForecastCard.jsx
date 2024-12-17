import styles from './ForecastCard.module.css';
import app from '../../data/content'

const ForecastCard = ({ item }) => {
    return (
    <div className={ styles.card } >
        <div className={ styles.inner }>
            <div className={ styles.title }>
                <p>{ item.time.split(' ')[1] }</p>
                <p></p>
            </div>
            <div>
                <img src={ item.condition.icon } alt="icon" />
            </div>
            <div className={ styles.temperature }>
                <p>{item.temp_c} { app.body.card.temperature }</p>
            </div>
            <div className={ styles.windSpeed }>
                <p>{ Math.floor(item.wind_kph / 3.6) } { app.body.card.windSpeed }</p>
            </div>
            <div className={ styles.precipitation }>
                <p>{ item.precip_mm } { app.body.card.precipitation }</p>
            </div>
        </div>
    </div>
    )
}

export default ForecastCard;
