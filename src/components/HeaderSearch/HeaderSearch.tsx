import styles from './HeaderSearch.module.scss';
import { Search } from "../Search/Search";
import { useState } from 'react';
import { fetchForecast } from '../../store/dataSlice';
import { useAppDispatch } from '../../store/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formFields } from '../../interfaces';

export const HeaderSearch: React.FC = () => {
    const [isFocus, setIsFocus] = useState(false);   
    const dispatch = useAppDispatch();  
    const body = document.querySelector<HTMLBodyElement>('body')!;
    const form = document.querySelector<HTMLFormElement>('.form'); //TODO Переделать
    const input = form ? form[0] as HTMLInputElement : null;

    const defaultValues: formFields = {
        cityName: ''
    }

    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues,
        shouldFocusError: true,
    });

    const onSubmit: SubmitHandler<formFields> = (data) => {
        setIsFocus(false);
        dispatch(fetchForecast(data.cityName));
        body.style.overflow = 'visible';
        if(input) {
            input.blur();
            input.value = '';
        }
    }

    return (
        <>
            <div className={ styles.wrapper }>
                <div className={ styles.search } style={ isFocus && window.innerWidth > 430 ? { minWidth: '400px' } : undefined}>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className='form'>
                        <Search 
                            register={register}
                            required
                            setIsFocus={ setIsFocus }
                            pattern={/[A-Za-zА-Яа-я]\s?/i}
                            isFocus={ isFocus }
                            body={body}
                        />  
                    </form>

                </div>
            </div>
            <div className={ styles.background } style={ isFocus ? { opacity: 1, zIndex: 2} : undefined}></div>
        </>
    );
}
