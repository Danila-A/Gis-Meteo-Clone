import styles from './styles.module.css';
import header from '../../data/content';
import { useState } from 'react';

const HeaderTimePointsList = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = (e) => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={ styles.wrapper }>
            <ul className={ styles.list }>
                { header.headerBottom.timePoints?.map((item, index) => {
                    return <li className={ styles.listItem } key={ index }><a href='#'>{ item }</a></li>;
                }) }
                <li className={ styles.listItem }><a href='#'>{ header.headerBottom.others[0] }</a></li>
                <li>
                    <div className={ styles.sublistWrapper }>
                        
                        <div className={ styles.listItem } onClick={(e)=> handleClick(e) }>Ещё</div>

                        {isVisible && <div className={ styles.sublist } id='sidebar-tree'>
                            { header.headerBottom.more?.map((item, index) => {
                                return <div key={ index }><a href='#'>{ item }</a></div>
                            }) }
                        </div>}

                    </div>
                </li>
            </ul>
        </div>
    );
}

export default HeaderTimePointsList;
