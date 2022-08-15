import React, { FC, ReactElement } from 'react';

import style from "./oneBlock.module.scss"
interface Props{
    name: string;
    description?: ReactElement;
    children:ReactElement;
    rightContent?:ReactElement;
    rightClick?: ()=> void;
}

const OneBlock: FC<Props> = ({children, name, rightContent, rightClick=undefined, description=null}) =>  {

    return (
        <div className={style.block}>
            <div className={style.blockInfo}>
                <div className={style.blockName}>
                    <h3>{name}</h3>
                    {description? <p>{description}</p> : ""}
                </div>
                <div className={style.blockButton}>
                <button onClick={rightClick}>{rightContent}</button> 
                </div>
            </div>
            <div className={style.blockContainer}>
                {children}
            </div>
        </div>
    );
}

export default OneBlock;

