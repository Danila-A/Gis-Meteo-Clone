import styles from './Main.module.css';
import PlaceAndDate from '../PlaceAndDate/PlaceAndDate';
import OneDayForecast from '../OneDayForecast/OneDayForeCast';
import ThreeDaysForecast from '../ThreeDaysForecast/ThreeDaysForecast';
import BigForecast from '../BigForecast/BigForecast';

const MainContainer = ({ weatherData, kindForecast }) => {
    return (
        <main className={ styles.main }>
            <div className={ styles.inner }>

                <PlaceAndDate 
                    date={ weatherData.dates } 
                    city={ weatherData.city } 
                />

                { (kindForecast === 0 || kindForecast === 1) && <OneDayForecast forecast={ weatherData.hourList } /> }
                { kindForecast === 3 && <ThreeDaysForecast forecast={ weatherData.hourList } /> }
                { kindForecast === 7 && <BigForecast forecast={ weatherData.hourList } /> }
                { kindForecast === 14 && <BigForecast forecast={ weatherData.hourList } />}

            </div>
        </main>
    )
}

export default MainContainer
