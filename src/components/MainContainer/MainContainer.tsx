import styles from './Main.module.scss';
import { PlaceAndDate } from '../PlaceAndDate/PlaceAndDate';
import { OneDayForecast } from '../OneDayForecast/OneDayForecast';
import { ThreeDaysForecast } from '../ThreeDaysForecast/ThreeDaysForecast';
import { withSkeleton } from '../../scripts/hocs/withSkeleton';
import { useFilter } from '../../scripts/hooks/useFilter';
import { DayBlock, HourList } from '../../interfaces';
import { useAppSelector } from '../../store/hooks';
import { selectForecast, selectKindForecast } from '../../store/dataSlice';


const MainContainer: React.FC = () => {
    const kindForecast: number = useAppSelector(selectKindForecast);
    const weatherData = useFilter(useAppSelector(selectForecast));    

    return (
        <main className={ styles.main }>
            <div className={ styles.inner }>

                <PlaceAndDate 
                    date={ weatherData?.dates } 
                    city={ weatherData?.city } 
                />

                { (kindForecast === 0 || kindForecast === 1) && <OneDayForecast forecast={ weatherData?.hourList as HourList[] } /> }
                { kindForecast === 3 && <ThreeDaysForecast forecast={ weatherData?.hourList as DayBlock[] } /> }

            </div>
        </main>
    );
}

export const MainContainerWithSkeleton = withSkeleton(MainContainer);
