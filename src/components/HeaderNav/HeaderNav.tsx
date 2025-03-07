import { Nav } from '../Nav/Nav';
import styles from './HeaderNav.module.scss';

export const HeaderNav: React.FC = () => {
    return (
        <div className={ styles.nav }>
            <Nav />
        </div>
    );
}
