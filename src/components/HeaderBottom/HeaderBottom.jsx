import HeaderSearch from '../HeaderSearch/HeaderSearch';
import HeaderTimePointsList from '../HeaderTimePointsList/HeaderTimePointsList';
import styles from './styles.module.css';

const HeaderBottom = () => {
    return (
        <div className="">
            <div className="">
                <HeaderSearch />
                <HeaderTimePointsList />
            </div>
        </div>
    );
}

export default HeaderBottom;
