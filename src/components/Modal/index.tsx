import React, {FC} from "react";

import {ReactComponent as IconClose} from '../../img/icons/static/close.svg';
import Loader from "../Loader";
import style from './style.module.scss';

interface Props {
    visible : boolean
    setVisible : (visible : boolean) => void;
    name : string;
    children?: JSX.Element;
    loader?: boolean
}

const ModalBox : FC < Props > = ({
    visible,
    setVisible,
    name,
    children,
    loader = false
}) => {


    return (
        <div
            className={!visible
            ? style.modalContainer
            : [style.modalContainer, style.active].join(' ')}
            onClick={() => setVisible(false)}>
            <div className={style.modal} onClick={event => event.stopPropagation()}>
                <div className={style.header}>
                    <h3>
                        <span>{name}</span>
                        <button onClick={() => setVisible(false)}>
                            <span>
                                <IconClose/>
                            </span>
                        </button>
                    </h3>

                </div>
                <div className={style.content}>
                    {loader
                        ? <Loader/>
                        : children}
                </div>
            </div>
        </div>
    );
}

export default ModalBox;