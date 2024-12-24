import app from '../../data/content'

export const useFilter = (weatherData, kindForecast) => {

    if(kindForecast === 0 || kindForecast === 1) {

        const list = weatherData.forecast.forecastday[kindForecast].hour.filter((_, index) => index % 3 === 0);

        return {
            dates: weatherData.forecast.forecastday[kindForecast].date,
            city: weatherData.location.name,   
            hourList: list.map((item) => (
                {
                    title: <p>{ item.time.split(' ')[1] }</p>,
                    icon: <img src={ item.condition.icon } alt="icon" />,
                    temperature: <p>{item.temp_c} { app.body.card.temperature }</p>,
                    windSpeed: <p>{ Math.floor(item.wind_kph / 3.6) } { app.body.card.windSpeed }</p>,
                    precipitation: <p>{ item.precip_mm } { app.body.card.precipitation }</p>,
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
                            date: <h3>{ app.body.daysOfWeek[new Date(item.date).getDay()] + ' ' + item.date }</h3>,
                            title: <p>{ day.time.split(' ')[1] }</p>,
                            icon: <img src={ day.condition.icon } alt="icon" />,
                            temperature: <p>{day.temp_c} { app.body.card.temperature }</p>,
                            windSpeed: <p>{ Math.floor(day.wind_kph / 3.6) } { app.body.card.windSpeed }</p>,
                            precipitation: <p>{ day.precip_mm } { app.body.card.precipitation }</p>,
                        }
                    ))
                
            )),
        }
    }
    if (kindForecast === 7) {
        const list = weatherData.forecast.forecastday.filter((_, index) => index < 7);

        return {
            dates: '7 дней',
            city: weatherData.location.name,   
            hourList: list.map((item) => (
                {
                    title: 
                        <>
                            <p>{ app.body.daysOfWeek[new Date(item.date).getDay()] }</p>
                            <p>{ item.date.split('-')[item.date.split('-').length - 1] }</p>
                        </>,
                    icon: <img src={ item.day.condition.icon } alt="icon" />,
                    temperature: 
                        <>
                            <p>{item.day.maxtemp_c} { app.body.card.temperature }</p>
                            <p>{item.day.mintemp_c} { app.body.card.temperature }</p>
                        </>,
                    windSpeed: <p>{ Math.floor(item.day.maxwind_kph / 3.6) } { app.body.card.windSpeed }</p>,
                    precipitation: <p>{ item.day.totalprecip_mm } { app.body.card.precipitation }</p>,
                }
            )),
        }
    }
    if (kindForecast === 14) {
        const list = weatherData.forecast.forecastday.filter((item, index) => item);

        return {
            dates: '2 недели',
            city: weatherData.location.name,   
            hourList: list.map((item) => (
                {
                    title: 
                        <>
                            <p>{ app.body.daysOfWeek[new Date(item.date).getDay()] }</p>
                            <p>{ item.date.split('-')[item.date.split('-').length - 1] }</p>
                        </>,
                    icon: <img src={ item.day.condition.icon } alt="icon" />,
                    temperature: 
                        <>
                            <p>{item.day.maxtemp_c} { app.body.card.temperature }</p>
                            <p>{item.day.mintemp_c} { app.body.card.temperature }</p>
                        </>,
                    windSpeed: <p>{ Math.floor(item.day.maxwind_kph / 3.6) } { app.body.card.windSpeed }</p>,
                    precipitation: <p>{ item.day.totalprecip_mm } { app.body.card.precipitation }</p>,
                }
            )),
        }
    }
}
