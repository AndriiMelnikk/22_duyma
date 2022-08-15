import React, {FC} from 'react';
import ModalBox from '..';
import style from '../style.module.scss'
import {TextInput} from '../../../ui/input';

interface Props {
    headerText : string;
    selectText : string;
    valueInput : string;
    labelName : string;
    inputPlaceholder : string;
    listBtn : JSX.Element;
    listInfo : string[][];
    loader : boolean;
    visible: boolean;
    setVisible:(visible: boolean) => void;
    setValueInput: (value: string) => void;
}

const ModalInfoEdit : FC < Props > = ({
    headerText,
    inputPlaceholder,
    labelName,
    listBtn,
    selectText,
    valueInput,
    listInfo,
    loader,
    visible,
    setVisible,
    setValueInput
}) => {

    const InfoDate = listInfo.map((e, index) => {
        return (
            <div  key={index}>
                <h5>{e[0]}:</h5>
                <h3>{e[1]}</h3>
            </div>
        )
    })

    return (
        <ModalBox
            name={headerText}
            visible={visible}
            setVisible={() => {setVisible(false)}}
            loader={loader}>
            <div className={style.duoBlocks}>
                <div className={style.textHeader}>
                    <h2>{selectText}</h2>
                </div>
                <div className={style.info}>
                    {InfoDate}
                </div>
                <div>
                    <TextInput
                        setValue={(e:string) => {setValueInput(e)}}
                        labelName={labelName}
                        placeholder={inputPlaceholder}
                        value={valueInput}/>
                        <div className={style.blockBTN}>
                        {listBtn}
                    </div>
                </div>
            </div>
        </ModalBox>
    )
}

export default ModalInfoEdit;
