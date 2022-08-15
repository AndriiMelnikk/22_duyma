import React, {FC, useMemo} from 'react';

import {BlockNumber} from '../../ts/works_';

import style from './blocks.module.scss';

interface Props {
    children : any;
    _class?: string
}

const Blocks : FC < Props > = ({
    children,
    _class = ''
}) => {
    return (
        <div className={[style.containerBlock, style[_class]].join(' ')}>
            {children}
        </div>
    )
}

export default Blocks;






interface Props_BlockNumbers {
    infoBlock : BlockNumber[]
}

export const BlockNumbers : FC < Props_BlockNumbers > = ({infoBlock}) => {

    const hash = useMemo(() => {
        if (infoBlock) 
            return infoBlock.map((e, index) => {
                return (
                    <div className={style.blockNumber} key={index}>
                        <h5>{e.name}</h5>
                        <h3>{e.number}</h3>
                    </div>
                )
            })

    }, [infoBlock]);

    return (
        <div className={style.containerBlock}>
            {hash}
        </div>
    )
}
