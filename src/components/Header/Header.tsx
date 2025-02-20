import { HeaderBottom } from "../HeaderBottom/HeaderBottom";
import { HeaderTop } from "../HeaderTop/HeaderTop";

export const Header: React.FC = () => {
    return (
        <header>
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
}
