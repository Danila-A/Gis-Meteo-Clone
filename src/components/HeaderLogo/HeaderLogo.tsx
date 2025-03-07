import { Logo } from '../../icons/Logo';
import styles from './HeaderLogo.module.scss';

export const HeaderLogo: React.FC = () => {
    return (
        <div className={ styles.logo }>
            <Logo />
        </div>
    );
}
