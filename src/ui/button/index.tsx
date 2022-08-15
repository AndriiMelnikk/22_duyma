import React, { FC } from 'react';
import { BackgroundColor } from '../../ts/ul';


import style from "./index.module.scss"

interface Props {
    background: BackgroundColor;
    text: string | JSX.Element;
    border?: 'border' | 'background';
    _click?: (date?:any)=>void
}

const Button: FC<Props> = ({background, text, border='background', _click}) =>  {

    return (
        <button onClick={_click} className={[style.button, style[background], style[border]].join(' ')}>
            {text}
        </button>
    );
}

export default Button;

