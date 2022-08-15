import React, { FC } from 'react';
import style from './style.module.scss';
const Loader: FC = () => {
    return (
        <div className={style.loader}>
            <img src={require('../../img/static/loader.gif')} alt='loader' />
        </div>
    );
};

export default Loader;
