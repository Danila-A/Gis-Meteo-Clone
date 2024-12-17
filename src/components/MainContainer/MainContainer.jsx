import styles from './Main.module.css';
import PlaceAndDate from '../PlaceAndDate/PlaceAndDate';
import OneDayForecast from '../OneDayForecast/OneDayForeCast';

const MainContainer = ({ weatherData, kindForecast }) => {
    // It's for future
    // console.log(new Date(weatherData.forecast.forecastday[0].date).getDay());
    const hourList = weatherData.forecast.forecastday[kindForecast].hour.filter((_, index) => index % 3 === 0);  
    
    return (
    <main className={ styles.main }>
        <div className={ styles.inner }>

            <PlaceAndDate 
                date={ hourList[0].time } 
                city={ weatherData.location.name } 
            />
            <OneDayForecast 
                hourList={ hourList }
            />
        </div>
    </main>
    )
}

export default MainContainer
