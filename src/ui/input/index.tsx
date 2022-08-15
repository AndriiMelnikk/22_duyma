import React, {ChangeEvent, FC, useState} from 'react';
import {BackgroundColor} from '../../ts/ul';
import Button from '../button';

import style from './input.module.scss';

interface CheckBox_P {
    name : string;
    value?: string;
    text?: string;
    checked?: boolean;
    disabled?: boolean;
}

export const CheckBox : FC < CheckBox_P > = ({
    name,
    value,
    text,
    checked = false,
    disabled = false
}) => {

    const [_checked,
        _setChecked] = useState(checked)
    const newCheck = () => {
        _setChecked(prev => !prev)
    }

    return (
        <label className={style.checkBox}>
            {text}
            <input
                type="checkbox"
                checked={_checked}
                disabled={disabled}
                name={name}
                value={value}
                onChange={newCheck}/>
            <span className={style.checkmark}></span>
        </label>
    );
}

// Text_input
interface TextBox_P {
    labelName : string;
    placeholder : string;
    value : string;
    setValue : (e : string) => void;
}

export const TextInput : FC < TextBox_P > = ({labelName, placeholder, value, setValue}) => {
    return (
        <div className={style.textBox}>
            <label >{labelName}</label>
            <input
                type="text"
                value={value}
                onChange={(e : ChangeEvent < HTMLInputElement >) => setValue(e.target.value)}
                placeholder={placeholder}></input>
        </div>
    )
}

// Radio_input

interface RadioBox_P {
    value : number;
    checked : number;
    setChecked : (e : number) => void;
    text : string;
    name : string;
}

export const RadioInput : FC < RadioBox_P > = ({value, name, text, checked, setChecked}) => {

    const _checked = (e : ChangeEvent < HTMLInputElement >) => {
        setChecked(Number(e.target.value))
    }

    const radio = (
        <label className={style.radioBox}>
            {text}
            <input type="radio" name={name} value={value} onChange={_checked}/>
        </label>
    )

    return (
        <div className={style.groupRadio}>
            <Button
                text={radio}
                border={value === checked
                ? 'background'
                : 'border'}
                background={BackgroundColor['green']}/>
        </div>
    )
}
