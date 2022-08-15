import React, { FC } from 'react';

import style from './pageHeader.module.scss';

import Avatar_img from "../../img/static/header.jpg"
import { ReactComponent as IconMenu} from '../../img/icons/sidebar/Menu.svg';
import { ReactComponent as IconSearch} from '../../img/icons/page_header/search.svg';
import { ReactComponent as IconNotifications} from '../../img/icons/page_header/notifications.svg';
import { Link } from 'react-router-dom';

interface Props{
    namePages:string;
    menuBtn:(visible: boolean)=> void;
}

const PageHeader: FC<Props> = ({namePages, menuBtn}) =>  {
    const name = namePages ?  namePages.charAt(0).toUpperCase() + namePages.slice(1) : "Головна";

    const clickBtn = (message:string)=>{
        alert(message)
    }
    const menuOpen = ()=>{
        menuBtn(true)
    }

    return (
        <div className={style.page_header}> 
            <div className={style.name_page}>
                <button onClick={menuOpen}><IconMenu/></button>
                <h2> <Link to={name}> {name}</Link></h2>
            </div>
            {/* <div className={style.icons}>
                <button onClick={()=>clickBtn('search')}><IconSearch/></button>  
                <button onClick={()=>clickBtn('Notifications')}><IconNotifications/></button>
            </div> */}
            <div className={style.account}>
                <button onClick={()=>clickBtn('Profile')}>
                    <span className={style.name_user}>Jones Ferdinand</span>
                    <span className={style.avatar_user}>
                        <img src={Avatar_img} alt="avatar" />
                    </span>
                </button>
            </div>
        </div>
    );
}

export default PageHeader;
