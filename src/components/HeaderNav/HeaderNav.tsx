import { Nav } from '../Nav/Nav';
import styles from './styles.module.scss';

export const HeaderNav: React.FC = () => {
    return (
        <div className={ styles.nav }>
            <Nav />
        </div>
    );
}
