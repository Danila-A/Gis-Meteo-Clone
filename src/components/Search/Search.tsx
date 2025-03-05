import styles from './search.module.scss';
import contentData from '../../data/content.json';
import { FormEvent, ForwardedRef, forwardRef } from 'react';

interface Props {
    onFocus: () => void;
    onSubmit: (event: FormEvent) => void;
}

export const Search = forwardRef(
    ({ onFocus, onSubmit }: Props, ref: ForwardedRef<HTMLInputElement>) => {

        return (
            <div>
                <form action="" onSubmit={(event) => onSubmit(event)}>
                    <input 
                        ref={ ref } 
                        onFocus={ onFocus } 
                        className={ styles.input } 
                        type="text" 
                        placeholder={ contentData.headerBottom.searchPlaceHolder } 
                    />
                </form>
            </div>
        );
    }
);
