import HeaderBottom from "../HeaderBottom/HeaderBottom";
import HeaderTop from "../HeaderTop/HeaderTop";

const Header = ({ weatherData }) => {
    return (
        <header>
            <div>
                <HeaderTop />
                <HeaderBottom 
                    weatherData={ weatherData }
                />
            </div>
        </header>
    );
}

export default Header;
