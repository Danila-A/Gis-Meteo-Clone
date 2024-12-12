import img from '../../images/icons8-cancel-50.png';
import styles from './CloseIcon.module.css';

const CloseIcon = ({ setIsVisible }) => {
  return (
    <div className={ styles.closeIcon } onClick={ () => setIsVisible(false) }>
        <img src={ img } alt="close icon" />
    </div>
  )
}

export default CloseIcon