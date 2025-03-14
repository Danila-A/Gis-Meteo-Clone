import styles from './Footer.module.scss';
import contentData from '../../data/content.json';

export const Footer: React.FC = () => {
  return (
    <footer className={ styles.wrapper }>
        <div className={ styles.inner }>

            <p className={ styles.text }>{ contentData.footer.text }</p>

        </div>
    </footer>
  )
}
