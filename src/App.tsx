import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { MainContainerWithSkeleton } from "./components/MainContainer/MainContainer";
import { Footer } from "./components/Footer/Footer";
import { fetchForecast } from "./store/dataSlice";
import { useAppDispatch } from "./store/hooks";


export const App: React.FC = () => {
  const dispatch = useAppDispatch();

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
