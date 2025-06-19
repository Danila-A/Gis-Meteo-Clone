import { Header } from "./components/Header/Header";
import { MainContainerWithSkeleton } from "./components/MainContainer/MainContainer";
import { Footer } from "./components/Footer/Footer";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainerWithSkeleton />
      <Footer />
    </>
  )
}
