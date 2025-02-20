import { Nav } from '../Nav/Nav';
import styles from './styles.module.css';

export const HeaderNav: React.FC = () => {
    return (
        <div className={ styles.nav }>
            <Nav />
        </div>
    );
}
