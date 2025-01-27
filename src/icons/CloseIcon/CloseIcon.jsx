import img from '../../images/icons8-cancel-50.png';
import styles from './CloseIcon.module.css';

export const CloseIcon = ({ setIsVisible }) => {
  const handleClick = () => {
    setIsVisible(false);
  }

  return (
    <div 
      className={ styles.wrapper } 
      onClick={ handleClick }
    >
      <img 
        className={ styles.icon }
        src={ img } 
        alt="close icon" 
      />
    </div>
  )
}
