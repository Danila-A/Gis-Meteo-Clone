import img from '../../images/icons8-cancel-50.png';
import styles from './CloseIcon.module.scss';

interface Props {
  setIsVisible: (value: React.SetStateAction<boolean>) => void;
}

export const CloseIcon: React.FC<Props> = ({ setIsVisible }) => {
  const body = document.querySelector<HTMLBodyElement>('body');

  const handleClick = () => {
    setIsVisible(false);
    if(body) body.classList = 'yes-scroll';
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
  );
}
