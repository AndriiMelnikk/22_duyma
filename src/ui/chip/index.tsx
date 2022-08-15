import React, { FC } from 'react';
import { BackgroundColor } from '../../ts/ul';


import style from "./chip.module.scss"

interface Props {
    background: BackgroundColor;
    text: string;
    border?: 'borderBig' | 'borderSmall'
}


const Chip: FC<Props> = ({background, text, border='borderBig'}) =>  {

    return (
        <span className={[style.chip, style[background], style[border]].join(' ')}>
            {text}
        </span>
    );
}

export default Chip;

