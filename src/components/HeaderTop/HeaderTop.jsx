import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import styles from './styles.module.css';

export const HeaderTop = () => {
    return (
        <div>
            <div className={ styles.inner }>
                <HeaderLogo />
                <HeaderNav />
            </div>
        </div>
    );
}
