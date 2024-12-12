import Header from "./components/Header/Header";
import useFetch from "./scripts/hooks/useFetch";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState('Москва');
  const [isLoading, setIsLoading] =useState(true);

  const weatherData = useFetch(data, setIsLoading);
  
  weatherData ? console.log(weatherData) : null;

  return (
    <>
      {/* 
        В папке data находится файл content.json Это файл который содержит "контентные данные" то есть данные,
        которые статичны. Пример: разделы сайтов, многоязычные переводы, тексты.

        Настройки разделов: их видимость, ссылки, изображения и другие данные.

        Тестовые данные: для начальной загрузки или тестирования интерфейса, пока ещё нет данных от сервера.
      */}
      <Header 
        setData={ setData } 
        weatherData={ weatherData }  
      />

      {isLoading ? 
        <p>Loading</p>
        :
        <>
          <h1>{ weatherData.location.name }</h1>
          <p>Температура: {weatherData.current.temp_c }</p>
          <p>Ощущается как: { weatherData.current.feelslike_c }</p>
          <p>Скорость верта: { Math.floor(weatherData.current.wind_kph / 3.6)} м/с</p>
          <p>Направление ветра: { weatherData.current.wind_dir }</p>
          <p>Количество осадков: { weatherData.current.precip_mm } мм</p>
          <img src={ weatherData.current.condition.icon } alt="" />
        </>
      }
      
    </>
  )
}

export default App
