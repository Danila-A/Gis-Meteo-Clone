import HeaderBottom from "../HeaderBottom/HeaderBottom";
import HeaderTop from "../HeaderTop/HeaderTop";
import styles from './styles.module.css';

const Header = () => {
    return (
        <header>
            <div>
                <HeaderTop />
                <HeaderBottom />
            </div>
        </header>
    );
}

export default Header;
