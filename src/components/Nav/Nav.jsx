import styles from './styles.module.css';
import header from '../../data/content';

const Nav = () => {
    return (
        <div className={ styles.container }>
            <ul className={ styles.list }>
                {header.headerTop.nav?.map((item, index) => {
                    return <li key={ index }><a href='#'>{ item }</a></li>
                })}
            </ul>
        </div>
    );
}

export default Nav;
