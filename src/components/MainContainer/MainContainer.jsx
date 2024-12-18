import styles from './Main.module.css';
import PlaceAndDate from '../PlaceAndDate/PlaceAndDate';
import OneDayForecast from '../OneDayForecast/OneDayForeCast';
import ThreeDaysForecast from '../ThreeDaysForecast/ThreeDaysForecast';

const MainContainer = ({ weatherData, kindForecast }) => {
    // It's for future
    // console.log(new Date(weatherData.forecast.forecastday[0].date).getDay());
    let hourList;
    let threeDays;  

    if (kindForecast === 0 || kindForecast === 1) {
        hourList = weatherData.forecast.forecastday[kindForecast].hour.filter((_, index) => index % 3 === 0)
    }
    if (kindForecast == 3) {
        threeDays = weatherData.forecast.forecastday.filter((_, index) => index < 3);
    }

    return (
    <main className={ styles.main }>
        <div className={ styles.inner }>

            <PlaceAndDate 
                date={ hourList ? hourList[0].time.split(' ')[0] : '3 дня' } 
                city={ weatherData.location.name } 
            />
            { kindForecast === 0 || kindForecast === 1 ? 
                <OneDayForecast 
                    hourList={ hourList }
                /> 
            : 
                null }
            { kindForecast === 3 ? 
                <ThreeDaysForecast 
                    threeDays={ threeDays }
                /> 
            : 
                null }
        </div>
    </main>
    )
}

export default MainContainer
