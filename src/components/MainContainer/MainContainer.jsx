import styles from './Main.module.css';
import PlaceAndDate from '../PlaceAndDate/PlaceAndDate';
import OneDayForecast from '../OneDayForecast/OneDayForeCast';
import ThreeDaysForecast from '../ThreeDaysForecast/ThreeDaysForecast';
import withSkeleton from '../../scripts/hocs/withSkeleton';
import { useSelector } from 'react-redux';
import { useFilter } from '../../scripts/hooks/useFilter';


const MainContainer = () => {
    const kindForecast = useSelector(state => state.data.kindForecast);
    const notFilteredData = useSelector(state => state.data.forecast);
    const filterData = useFilter(notFilteredData);
    const weatherData = filterData(notFilteredData);

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
