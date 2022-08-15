import React, { FC } from 'react';

import style from './table.module.scss';

import { ReactComponent as IconMore} from '../../img/icons/table/more.svg';

import AvatarTable from "../../img/static/avatar_table.jpg";
import Chip from '../../ui/chip';
import { User } from '../../ts/works_';
import { useNavigate } from 'react-router-dom';
import { BackgroundColor } from '../../ts/ul';

interface Props{
    table?: User[];
    clickTr:(info:any)=>void
}

const Table: FC<Props> =({table,clickTr}) => {
    const navigate = useNavigate();


    const infoUser =(event:any ,name:string)=>{
        event.stopPropagation()
        alert('info User: ' + name )
    }

    const dateUser = (user:User)=>{
        clickTr(user)
        navigate("user/"+user.username)
    }

    const List = table?.map(e=>{
        let background = [BackgroundColor.yellow,BackgroundColor.green, BackgroundColor.red];
        let randomBackground = Math.floor(Math.random() * background.length);
        return(
        <tr key={e.id} onClick={()=>{dateUser(e)}}>
            <td>
                <div className={style.tb_userDetails}>
                    <div className={style.userAvatar}>
                        <img src={AvatarTable} alt="avatar" />
                    </div>
                    <div className={style.infoTd}>
                        <h4 className={style.infoTd_h4}>{e.name}</h4>
                        <span className={style.infoTd_span}>{e.address.city}</span>
                    </div>
                </div>
            </td>
            <td>
                <div className={style.infoTd}>
                    <h4 className={style.infoTd_h4}>{e.company.name}</h4>
                    <span className={style.infoTd_span}>{e.company.catchPhrase}</span>
                </div>
            </td>
            <td>
                <div className={style.infoTd}>
                    <h4 className={style.infoTd_h4}>{e.email}</h4>
                    <span className={style.infoTd_span}>{e.email}</span>
                </div>
            </td>
            <td>
                <div className={style.infoTd}>
                    <Chip text='high' background={background[randomBackground]}/>
                </div>
            </td>
            <td>
                <div className={style.infoTd}>
                    <button onClick={(event)=>{infoUser(event, e.name)}}> <IconMore /></button>
                </div>
            </td>
        </tr>
        )
    })

    return(
        <div className={style.tableContainer}>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.th_userDetails}>User details</th>
                        <th className={style.th_companyName}>Company name</th>
                        <th className={style.th_email}>Email</th>
                        <th className={style.th_distance}>Distance</th>
                        <th className={style.th_else}></th>
                    </tr>
                </thead>
                <tbody>
                    {List}
                </tbody>
            </table>
        </div>)
}

export default Table;