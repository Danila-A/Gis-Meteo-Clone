import { useEffect } from "react";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecast } from "./store/dataSlice";


const App = () => {
  const dispatch = useDispatch();
  const city = useSelector(state => state.data.city);

  useEffect(() => {
    dispatch(fetchForecast(city));
  }, [])
  
  // For debugging
  // weatherData && console.log('Not filtered data:\n', weatherData);
  // weatherData && console.log('Filtered data:\n', filteredWeatherData);
  
  return (
    <>
      {/* 
        В папке data находится файл content.json Это файл который содержит "контентные данные" то есть данные,
        которые статичны. Пример: разделы сайтов, многоязычные переводы, тексты.

        Настройки разделов: их видимость, ссылки, изображения и другие данные.

        Тестовые данные: для начальной загрузки или тестирования интерфейса, пока ещё нет данных от сервера.
      */}
      <Header />
      <MainContainer />
    </>
  )
}

export default App
