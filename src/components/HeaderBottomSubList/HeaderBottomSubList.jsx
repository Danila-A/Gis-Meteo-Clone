import header from '../../data/content';
import Arrow from '../../icons/arrow';
import styles from './styles.module.css';
import { useState, useEffect, useRef } from 'react';

const HeaderBottomSubList = () => {

    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef();

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        const handler = (event) => {
            if(ref.current && !ref.current.contains(event.target)) {
                setIsVisible(false);
            }            
        }

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        }
    }, [ref])

    return (
        <div className={ styles.sublistWrapper }>
                        
            <div className={ styles.moreButton } ref={ ref } onClick={ handleClick }>Ещё<div className={ styles.arrow }><Arrow /></div></div>

            {isVisible && <div className={ styles.sublist }>
                { header.headerBottom.more?.map((item, index) => {
                    return (
                        <div key={ index }>
                            <a className={ styles.link } href='#'>{ item }</a>
                        </div>
                    )
                }) }
            </div>}

        </div>
    );
}

export default HeaderBottomSubList;
