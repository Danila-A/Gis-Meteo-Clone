import styles from './BurgerIcon.module.css'
import image from '../../images/icons8-hamburger-button-32.png'

export const BurgerIcon = ({ handleClick }) => {
  return (
    <div 
      className={ styles.wrapper } 
      onClick={ handleClick }
    >
        <img src={ image } />
    </div>
  )
}
