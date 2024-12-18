import ThreeDaysForecastBlock from '../ThreeDaysForecastBlock/ThreeDaysForecastBlock';
import styles from './ThreeDaysForecast.module.css';

const ThreeDaysForecast = ({ threeDays }) => {

    const filteredThreeDays = threeDays.map((item) => {
        return (
            {
                ...item,
                hour: item.hour.filter((_, index) => index % 6 === 0)
            }
        )
    })

    return (
    <div>
        <div className="" style={{ display: 'flex'}}>
            {
                filteredThreeDays.map((item, index) => {
                    return (
                        <ThreeDaysForecastBlock 
                            key={ index }    
                            day={ item } 
                        />
                    )
                })
            }
        </div>
    </div>
    )
}

export default ThreeDaysForecast;
