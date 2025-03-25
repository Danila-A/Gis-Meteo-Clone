import contentData from '../../data/content.json'
import styles from './MobileMenu.module.scss';
import { CloseIcon } from '../../icons/CloseIcon/CloseIcon';
import { changeKindForecast, selectForecast } from '../../store/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import reactDOM from 'react-dom';

interface Props {
    setIsVisible: (value: React.SetStateAction<boolean>) => void;
}

export const MobileMenu: React.FC<Props> = ({ setIsVisible }) => {
    const dispatch = useAppDispatch();
    const weatherData = useAppSelector(selectForecast);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const link: HTMLAnchorElement = event.target as HTMLAnchorElement;
        dispatch(changeKindForecast(Number(link?.getAttribute('data-value'))));
        setIsVisible(false);
    }

    return reactDOM.createPortal(
        <>
            <div className={ styles.menu }>
                <div className={ styles.inner }>

                    <CloseIcon setIsVisible={ setIsVisible } />

                    <ul className={ styles.menuList }>
                        {weatherData && (contentData.headerBottom.forecastPoints?.map((point, index) => {
                            return (
                                <li 
                                    className={ styles.listItem } 
                                    key={ index }>
                                        <a 
                                            data-value={ point.value }
                                            onClick={ (event) => handleClick(event) }
                                        >
                                            { point.text }
                                        </a>
                                </li>
                            );
                        }))}
                    </ul>

                </div>
            </div>
        </>,
        document.body                
    );
}
