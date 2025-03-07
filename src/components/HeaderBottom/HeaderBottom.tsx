import { useState } from 'react';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { HeaderTimePointsList } from '../HeaderTimePointsList/HeaderTimePointsList';
import { BurgerIcon } from '../../icons/BurgerIcon/BurgerIcon';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import styles from './HeaderBottom.module.scss';

export const HeaderBottom: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);   
    
    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={ styles.headerBottom}>
            <div className={ styles.inner }>

                <HeaderSearch />
                <HeaderTimePointsList />

                <BurgerIcon handleClick={ handleClick }/>
                {isVisible && <MobileMenu setIsVisible={ setIsVisible } />}

            </div>
        </div>
    );
}
