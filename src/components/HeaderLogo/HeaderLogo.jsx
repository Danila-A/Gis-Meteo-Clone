import { Logo } from '../../icons/Logo';
import styles from './styles.module.css';

export const HeaderLogo = () => {
    return (
        <div className={ styles.logo }>
            <Logo />
        </div>
    );
}
