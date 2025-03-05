import styles from './BurgerIcon.module.scss'
import image from '../../images/icons8-hamburger-button-32.png'

interface Props {
  handleClick: () => void;
}

export const BurgerIcon: React.FC<Props> = ({ handleClick }) => {
  return (
    <div 
      className={ styles.wrapper } 
      onClick={ handleClick }
    >
        <img src={ image } />
    </div>
  )
}
