import styles from './Main.module.css';
import PlaceAndDate from '../PlaceAndDate/PlaceAndDate';
import OneDayForecast from '../OneDayForecast/OneDayForeCast';
import ThreeDaysForecast from '../ThreeDaysForecast/ThreeDaysForecast';
import BigForecast from '../BigForecast/BigForecast';

const MainContainer = ({ weatherData, kindForecast }) => {
    let hourList;
    let threeDays;
    let sevenDays; 
    let fourteenDays;
    let dates;

    if (kindForecast === 0 || kindForecast === 1) {
        hourList = weatherData.forecast.forecastday[kindForecast].hour.filter((_, index) => index % 3 === 0)
    }
    if (kindForecast === 3) {
        threeDays = weatherData.forecast.forecastday.filter((_, index) => index < 3);
        dates = '3 дня';
    }
    if (kindForecast === 7) {
        sevenDays = weatherData.forecast.forecastday.filter((_, index) => index < 7);
        dates = '7 дней';
    }
    if (kindForecast === 14) {
        fourteenDays = weatherData.forecast.forecastday.filter((item, index) => item);
        dates = '2 недели';
        console.log(fourteenDays);
    }

    return (
    <main className={ styles.main }>
        <div className={ styles.inner }>

            <PlaceAndDate 
                date={ hourList ? hourList[0].time.split(' ')[0] : dates } 
                city={ weatherData.location.name } 
            />

            { (kindForecast === 0 || kindForecast === 1) && <OneDayForecast hourList={ hourList } /> }
            { kindForecast === 3 && <ThreeDaysForecast threeDays={ threeDays } /> }
            { kindForecast === 7 && <BigForecast forecast={ sevenDays } /> }
            { kindForecast === 14 && <BigForecast forecast={ fourteenDays } />}

        </div>
    </main>
    )
}

export default MainContainer
