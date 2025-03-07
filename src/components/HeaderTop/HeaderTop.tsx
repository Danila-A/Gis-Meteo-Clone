import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import styles from './HeaderTop.module.scss';

export const HeaderTop: React.FC = () => {
    return (
        <div>
            <div className={ styles.inner }>
                <HeaderLogo />
                <HeaderNav />
            </div>
        </div>
    );
}
