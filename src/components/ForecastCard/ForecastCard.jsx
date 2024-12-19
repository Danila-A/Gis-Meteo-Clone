import styles from './ForecastCard.module.css';
import app from '../../data/content'

const ForecastCard = ({ item, oneDay, dayTime=null, bigforecast }) => {
    return (
    <div className={ styles.card } >
        <div className={ styles.inner }>

            <div className={ styles.title }>
                { oneDay && <p>{ item.time.split(' ')[1] }</p>}
                { dayTime && <p>{ dayTime }</p>}
                { bigforecast && 
                    <>
                        <p>{ app.body.daysOfWeek[new Date(item.date).getDay()] }</p>
                        <p>{ item.date.split('-')[item.date.split('-').length - 1] }</p>
                    </> }
            </div>
            <div className={ styles.icon }>
                { bigforecast ? 
                    <img src={ item.day.condition.icon } alt="icon" />
                :
                    <img src={ item.condition.icon } alt="icon" /> }
            </div>
            <div className={ styles.temperature }>
                { bigforecast ? 
                    <>
                        <p> {item.day.maxtemp_c} { app.body.card.temperature }</p>
                        <p> {item.day.mintemp_c} { app.body.card.temperature }</p>
                    </>
                :
                    <p>{item.temp_c} { app.body.card.temperature }</p> }
            </div>
            <div className={ styles.windSpeed }>
                { bigforecast ? 
                    <p>{ Math.floor(item.day.maxwind_kph / 3.6) } { app.body.card.windSpeed }</p>
                :
                    <p>{ Math.floor(item.wind_kph / 3.6) } { app.body.card.windSpeed }</p> }
            </div>
            <div className={ styles.precipitation }>
                { bigforecast ? 
                    <p>{ item.day.totalprecip_mm } { app.body.card.precipitation }</p>
                :
                    <p>{ item.precip_mm } { app.body.card.precipitation }</p> }
            </div>

        </div>
    </div>
    )
}

export default ForecastCard;
