import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { MainContainerWithSkeleton } from "./components/MainContainer/MainContainer";
import { Footer } from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import { fetchForecast } from "./store/dataSlice";


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast('Москва'));
  }, [])
    
  return (
    <>
      <Header />
      <MainContainerWithSkeleton />
      <Footer />
    </>
  )
}
