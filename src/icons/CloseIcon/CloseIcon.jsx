import img from '../../images/icons8-cancel-50.png';
import styles from './CloseIcon.module.css';

const CloseIcon = ({ setIsVisible, root }) => {

  const handleClick = () => {
    setIsVisible(false);
    root.style.overflow = 'visible';
  }

  return (
    <div className={ styles.closeIcon } onClick={ handleClick }>
        <img src={ img } alt="close icon" />
    </div>
  )
}

export default CloseIcon