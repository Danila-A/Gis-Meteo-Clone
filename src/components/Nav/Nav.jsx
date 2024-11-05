import styles from './styles.module.css';
import header from '../../data/content';

const Nav = () => {
    return (
        <div className="">
            <ul>
                {header.headerTop.nav?.map((item, index) => {
                    return <li key={ index }>{ item }</li>
                })}
            </ul>
        </div>
    );
}

export default Nav;
