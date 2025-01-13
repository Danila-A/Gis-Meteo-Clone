import { useEffect } from "react";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import { useDispatch } from "react-redux";
import { fetchForecast } from "./store/dataSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast('Москва'));
  }, [])
    
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
