import img from '../../images/icons8-cancel-50.png';
import styles from './CloseIcon.module.css';

interface Props {
  setIsVisible: (value: React.SetStateAction<boolean>) => void;
}

export const CloseIcon: React.FC<Props> = ({ setIsVisible }) => {
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
