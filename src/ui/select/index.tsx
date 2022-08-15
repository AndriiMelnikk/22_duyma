import React, {ChangeEvent, FC } from 'react';

import style from './style.module.scss';

interface Props {
    name : string;
    children: any;
    selectF: (par:any)=> void;
}

const Select : FC < Props > = ({name, children, selectF}) => {

    return (
        <select  name="select"  className={style.select}  onChange={(e: ChangeEvent<HTMLSelectElement>) => selectF(e)}>
            <option value={'null'}  defaultValue={"default"}>{name}</option>
            {children}
        </select>
    );
}

export default Select;
