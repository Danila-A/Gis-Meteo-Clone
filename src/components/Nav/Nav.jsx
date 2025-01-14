import styles from './styles.module.css';
import contentData from '../../data/content.json';

const Nav = () => {
    return (
        <div className={ styles.container }>
            <ul className={ styles.list }>
                {contentData.headerTop.nav?.map((item, index) => {
                    return <li key={ index }>{ item }</li>
                })}
            </ul>
        </div>
    );
}

export default Nav;
