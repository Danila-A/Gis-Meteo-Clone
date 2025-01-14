import app from '../../data/content'
import contentData from '../../data/content.json'
import { reformatDate } from '../helpers/reformatDate';
import { useSelector } from 'react-redux';

export const useFilter = (weatherData) => {
    const kindForecast = useSelector(state => state.data.kindForecast);

    if(kindForecast === 0 || kindForecast === 1) {

        const list = weatherData.forecast.forecastday[kindForecast].hour.filter((_, index) => index % 3 === 0);

        return {
            dates: reformatDate(weatherData.forecast.forecastday[kindForecast].date),
            city: weatherData.location.name,   
            hourList: list.map((item) => (
                {
                    title: <p>{ item.time.split(' ')[1] }</p>,
                    icon: <img src={ item.condition.icon } alt="icon" />,
                    temperature: <p>{item.temp_c} { contentData.body.card.temperature }</p>,
                    windSpeed: <p>{ Math.floor(item.wind_kph / 3.6) } { contentData.body.card.windSpeed }</p>,
                    precipitation: <p>{ item.precip_mm } { contentData.body.card.precipitation }</p>,
                }
            )),
        }        
    }
    if(kindForecast === 3) {
        const threeDays = weatherData.forecast.forecastday.filter((_, index) => index < 3);

        const filteredThreeDays = threeDays.map((item) => (
                {
                    ...item,
                    hour: item.hour.filter((_, index) => index % 6 === 0)
                }
            )
        )

        return {
            dates: '3 дня',
            city: weatherData.location.name,   
            hourList: filteredThreeDays.map((item) => (
                
                item.hour.map((day) => (
                    {
                        date: (
                                <h3 style={new Date(item.date).getDay() === 0 || new Date(item.date).getDay() === 6 ? { color: 'red'} : null}>
                                    { contentData.body.daysOfWeek[new Date(item.date).getDay()] + ' ' + reformatDate(item.date) }
                                </h3>
                            ),
                        title: <p>{ day.time.split(' ')[1] }</p>,
                        icon: <img src={ day.condition.icon } alt="icon" />,
                        temperature: <p>{day.temp_c} { contentData.body.card.temperature }</p>,
                        windSpeed: <p>{ Math.floor(day.wind_kph / 3.6) } { contentData.body.card.windSpeed }</p>,
                        precipitation: <p>{ day.precip_mm } { contentData.body.card.precipitation }</p>,
                    }
                ))
                
            )),
        }
    }
}
