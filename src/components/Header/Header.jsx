import HeaderBottom from "../HeaderBottom/HeaderBottom";
import HeaderTop from "../HeaderTop/HeaderTop";

const Header = ({ setCity, weatherData, setKindForecast }) => {
    return (
        <header>
            <div>
                <HeaderTop />
                <HeaderBottom 
                    setCity={ setCity }
                    weatherData={ weatherData }
                    setKindForecast={ setKindForecast }
                />
            </div>
        </header>
    );
}

export default Header;
