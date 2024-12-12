import HeaderBottom from "../HeaderBottom/HeaderBottom";
import HeaderTop from "../HeaderTop/HeaderTop";

const Header = ({ setData, weatherData }) => {
    return (
        <header>
            <div>
                <HeaderTop />
                <HeaderBottom 
                    setData={ setData }
                    weatherData={ weatherData }
                />
            </div>
        </header>
    );
}

export default Header;
