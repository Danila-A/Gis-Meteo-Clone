import contentData from '../../data/content.json'
import styles from './MobileMenu.module.scss';
import { CloseIcon } from '../../icons/CloseIcon/CloseIcon';
import { setKindForecast } from '../../store/Slices/dataSlice';
import { useAppDispatch } from '../../store/hooks';
import reactDOM from 'react-dom';
interface Props {
    setIsVisible: (value: React.SetStateAction<boolean>) => void;
}

export const MobileMenu: React.FC<Props> = ({ setIsVisible }) => {
    const dispatch = useAppDispatch();
    const body = document.querySelector<HTMLBodyElement>('body');

    const handleClick = (kindForecast: number) => {
        dispatch(setKindForecast(kindForecast));
        setIsVisible(false);
        if(body) body.classList = 'yes-scroll';
    }

    return reactDOM.createPortal(
        <>
            <div className={ styles.menu }>
                <div className={ styles.inner }>

                    <CloseIcon setIsVisible={ setIsVisible } />

                    <ul className={ styles.menuList }>
                        {contentData.headerBottom.forecastPoints?.map((point, index) => {
                            return (
                                <li 
                                    className={ styles.listItem } 
                                    key={ index }
                                >
                                    <a onClick={ () => handleClick(point.value) }>
                                        { point.text }
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                </div>
            </div>
        </>,
        document.body                
    );
}
