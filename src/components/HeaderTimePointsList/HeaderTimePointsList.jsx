import styles from './styles.module.css';
import header from '../../data/content';

const HeaderTimePointsList = () => {
    return (
        <div>
            <ul>
                { header.headerBottom.timePoints?.map((item, index) => {
                    return <li key={ index }>{ item }</li>;
                }) }
                <li>{ header.headerBottom.others[0] }</li>
                <li>
                    <ul>
                        <li>Ещё</li>
                        { header.headerBottom.more?.map((item, index) => {
                            return <li key={ index }>{ item }</li>
                        }) }
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default HeaderTimePointsList;
