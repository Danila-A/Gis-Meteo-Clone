import styles from './styles.module.scss';
import contentData from '../../data/content.json';

export const Nav: React.FC = () => {
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
