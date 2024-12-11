import HeaderSearch from '../HeaderSearch/HeaderSearch';
import HeaderTimePointsList from '../HeaderTimePointsList/HeaderTimePointsList';
import styles from './styles.module.css';

const HeaderBottom = ({ data, setData }) => {
    return (
        <div className={ styles.headerBottom}>
            <div className={ styles.inner }>
                <HeaderSearch data={ data } setData={ setData }/>
                <HeaderTimePointsList />
            </div>
        </div>
    );
}

export default HeaderBottom;
