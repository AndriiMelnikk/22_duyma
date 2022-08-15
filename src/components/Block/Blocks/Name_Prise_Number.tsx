import React, {FC} from 'react';
import Blocks from '..';
import { ConsumablesToID } from '../../../ts/consumables';
import { WortToID } from '../../../ts/typeOfWorks';
import style from '../blocks.module.scss';

interface Props_NamePriseNumber {
    infoBlock : ConsumablesToID[] | WortToID[],
    _onClick: (obj:ConsumablesToID | WortToID)=>void,
}

 const NamePriseNumberBlock : FC < Props_NamePriseNumber > = ({infoBlock, _onClick}) => {

    const hash = infoBlock.map((e, index) => {

            return (
                <div className={style.blockNumberName} key={index} onClick={()=>_onClick(e)} >
                    <h3>{e.name}</h3>
                    <span className={style.spanPrise}>{e.prise} грн.</span>
                    {"number" in e ? <span className={style.spanNumber}>{e.number} шт.</span> : <></>}
                </div>
            )
        })
    

    return (
        <Blocks _class={'NumberName'}>
            {hash}
        </Blocks>
    )
}


export default NamePriseNumberBlock;