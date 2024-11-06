import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderNav from '../HeaderNav/HeaderNav';
import styles from './styles.module.css';

const HeaderTop = () => {
    return (
        <div>
            <div className={ styles.inner }>
                <HeaderLogo />
                <HeaderNav />
            </div>
        </div>
    );
}

export default HeaderTop;