import styles from './Main.module.css';
import PlaceAndDate from '../PlaceAndDate/PlaceAndDate';
import OneDayForecast from '../OneDayForecast/OneDayForeCast';
import ThreeDaysForecast from '../ThreeDaysForecast/ThreeDaysForecast';
import withSkeleton from '../../scripts/hocs/withSkeleton';
import { useSelector } from 'react-redux';


const MainContainer = () => {
    const kindForecast = useSelector(state => state.data.kindForecast);
    const weatherData = useSelector(state => state.data.forecast);

    return (
        <main className={ styles.main }>
            <div className={ styles.inner }>

                <PlaceAndDate 
                    date={ weatherData.dates } 
                    city={ weatherData.city } 
                />

                { (kindForecast === 0 || kindForecast === 1) && <OneDayForecast forecast={ weatherData.hourList } /> }
                { kindForecast === 3 && <ThreeDaysForecast forecast={ weatherData.hourList } /> }

            </div>
        </main>
    )
}

const MainContainerWithSkeleton = withSkeleton(MainContainer);

export default MainContainerWithSkeleton;
