import HeaderSearch from '../HeaderSearch/HeaderSearch';
import HeaderTimePointsList from '../HeaderTimePointsList/HeaderTimePointsList';
import styles from './styles.module.css';

const HeaderBottom = () => {
    return (
        <div className={ styles.headerBottom}>
            <div className={ styles.inner }>
                <HeaderSearch />
                <HeaderTimePointsList />
            </div>
        </div>
    );
}

export default HeaderBottom;
