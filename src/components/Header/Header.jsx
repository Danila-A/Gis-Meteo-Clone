import HeaderBottom from "../HeaderBottom/HeaderBottom";
import HeaderTop from "../HeaderTop/HeaderTop";

const Header = ({ setData, weatherData, setKindForecast }) => {
    return (
        <header>
            <div>
                <HeaderTop />
                <HeaderBottom 
                    setData={ setData }
                    weatherData={ weatherData }
                    setKindForecast={ setKindForecast }
                />
            </div>
        </header>
    );
}

export default Header;
