import HeaderBottom from "../HeaderBottom/HeaderBottom";
import HeaderTop from "../HeaderTop/HeaderTop";

const Header = ({ data, setData }) => {
    return (
        <header>
            <div>
                <HeaderTop />
                <HeaderBottom data={ data } setData={ setData }/>
            </div>
        </header>
    );
}

export default Header;
