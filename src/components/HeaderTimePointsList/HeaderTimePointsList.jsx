import styles from './styles.module.css';
import header from '../../data/content';
import HeaderBottomSubList from '../HeaderBottomSubList/HeaderBottomSubList';


const HeaderTimePointsList = () => {
    return (
        <div className={ styles.wrapper }>
            <ul className={ styles.list }>

                { header.headerBottom.timePoints?.map((item, index) => {
                    return <li className={ styles.listItem } key={ index }><a href='#'>{ item }</a></li>;
                }) }

                <li className={ styles.listItem }><a href='#'>{ header.headerBottom.others[0] }</a></li>

                <li>
                    <HeaderBottomSubList />
                </li>
                
            </ul>
        </div>
    );
}

export default HeaderTimePointsList;
