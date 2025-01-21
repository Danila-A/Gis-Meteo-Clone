import styles from './Footer.module.css';
import contentData from '../../data/content.json';

const Footer = () => {
  return (
    <footer className={ styles.wrapper }>
        <div className={ styles.inner }>

            <p className={ styles.text }>{ contentData.footer.text }</p>

        </div>
    </footer>
  )
}

export default Footer;
