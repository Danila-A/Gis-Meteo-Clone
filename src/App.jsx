import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import { useFilter }  from "./scripts/hooks/useFilter";
import useFetch from "./scripts/hooks/useFetch";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState('Москва');
  const [isLoading, setIsLoading] = useState(true);
  const [kindForecast, setKindForecast] = useState(0);
  let filteredWeatherData;

  const weatherData = useFetch(data, setIsLoading);
  weatherData ? filteredWeatherData = useFilter(weatherData, kindForecast): null ;

  weatherData ? console.log(weatherData) : null;

  weatherData ? console.log(useFilter(weatherData, kindForecast)) : null;
  

  // console.log(kindForecast);

  useEffect(() => {
    setKindForecast(0);
  }, [data]);

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
        setKindForecast={ setKindForecast }
      />

      {isLoading ? 
        <p>Loading</p>
        :
        <MainContainer 
          weatherData={ filteredWeatherData } 
          kindForecast={ kindForecast }  
        />
      }
    </>
  )
}

export default App
