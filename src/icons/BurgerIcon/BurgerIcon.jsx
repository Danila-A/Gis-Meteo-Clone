import styles from './BurgerIcon.module.css'
import image from '../../images/icons8-hamburger-button-32.png'

const BurgerIcon = ({ handleClick }) => {
  return (
    <div className={ styles.iconWrapper } onClick={ handleClick }>
        <img src={ image } />
    </div>
  )
}

export default BurgerIcon;
