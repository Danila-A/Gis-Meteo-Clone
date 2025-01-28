import { Logo } from '../../icons/Logo';
import styles from './styles.module.css';

export const HeaderLogo: React.FC = () => {
    return (
        <div className={ styles.logo }>
            <Logo />
        </div>
    );
}
