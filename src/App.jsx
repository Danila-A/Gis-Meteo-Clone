import { fetchWeatherApi, timezone } from "openmeteo";
import Header from "./components/Header/Header";
import useFetch from "./scripts/hooks/useFetch";

const App = () => {

  const data = useFetch();

  // Используя геокодирования от Google Maps API
  // data ? console.log("latitude: " + data.latitude) : null;
  // data ? console.log("longitude: " + data?.longitude) : null;
  // data ? console.log("elevation: " + data?.elevation) : null;
  // data ? console.log("generationtime_ms: " + data?.generationtime_ms) : null;
  // data ? console.log("utc_offset_seconds: " + data?.utc_offset_seconds) : null;
  // data ? console.log("timezone: " + data?.timezone) : null;
  // data ? console.log("timezone_abbreviation: " + data?.timezone_abbreviation) : null;

  
  return (
    <>
      {/* 
        В папке data находится файл content.json Это файл который содержит "контентные данные" то есть данные,
        которые статичны. Пример: разделы сайтов, многоязычные переводы, тексты.

        Настройки разделов: их видимость, ссылки, изображения и другие данные.

        Тестовые данные: для начальной загрузки или тестирования интерфейса, пока ещё нет данных от сервера.
      */}
      <Header />

      <p>{ "latitude: " + data?.latitude }</p>
      <p>{ "longitude: " + data?.longitude }</p>
      <p>{ "elevation: " + data?.elevation }</p>
      <p>{ "generationtime_ms: " + data?.generationtime_ms}</p>
      <p>{ "utc_offset_seconds: " + data?.utc_offset_seconds }</p>
      <p>{ "timezone: " + data?.timezone }</p>
      <p>{ "timezone_abbreviation: " + data?.timezone_abbreviation }</p>
    </>
  )
}

export default App
