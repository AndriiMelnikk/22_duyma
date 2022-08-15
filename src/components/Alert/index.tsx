import React, {FC, useEffect} from 'react';
import {BackgroundColor} from '../../ts/ul';
import style from './style.module.scss';
import {ReactComponent as IconClose} from '../../img/icons/static/close.svg';
import { useAppDispatch } from '../../redux/hooks';
import { removeAlert } from '../../redux/reducer/alertMessages';

interface Props {
    background : BackgroundColor;
    text : string;
    message : string;
    id: number;
}

const Alert : FC < Props > = ({background, text, message, id}) => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(removeAlert(id))
        }, 7000)

        return () => clearTimeout(timeout);
    }, []);

    const deleteAlert= (id:number)=>{
        dispatch(removeAlert(id))
    }

    return (
        <div
            className={[style.alertBox, style[background]].join(' ')}>

            <div className={style.close}>
                <button onClick={() => deleteAlert(id)}>
                    <IconClose/>
                </button>
            </div>
            <h3>
                <span>{text}</span>
            </h3>
            <p>
                {message}
            </p>
        </div>
    );

};

export default Alert;