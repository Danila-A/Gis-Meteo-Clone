import { useEffect } from "react";
import Header from "./components/Header/Header";
import { getWether } from "./scripts/api/getWether";


const App = () => {

  useEffect(() => {
    getWether();
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
    </>
  )
}

export default App
