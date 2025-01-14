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
      <Header />
      <MainContainer />
    </>
  )
}

export default App
