import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import IconLogo from '../../img/icons/sidebar/logo.png';

import { ReactComponent as  IconMaterial} from '../../img/icons/sidebar/Material.svg';
import { ReactComponent as  IconWorks} from '../../img/icons/sidebar/Works.svg';
import { ReactComponent as  IconOnlineQueue} from '../../img/icons/sidebar/OnlineQueue.svg';
import { ReactComponent as  IconDebtor} from '../../img/icons/sidebar/Debtor.svg';
import { ReactComponent as  IconStorage} from '../../img/icons/sidebar/Storage.svg';
import { ReactComponent as  IconTires} from '../../img/icons/sidebar/Tires.svg';
import { ReactComponent as  IconSettings} from '../../img/icons/sidebar/Settings.svg';
import { ReactComponent as IconClose} from '../../img/icons/static/close.svg';

import style from './sidebar.module.scss';

interface Props{
  menuBtn:(visible: boolean)=> void;
  menuVisible:boolean;
}

const Sidebar: FC<Props> = ({menuBtn, menuVisible}) =>  {

  const menuClose =()=>{
    menuBtn(false)
}

  return (
    <div className={menuVisible ? [style.sidebar, style.active].join(' ') : style.sidebar}>
        <div className={style.sidebar_brand_box}>
          <span className={style.img_logo}>
            <img src={IconLogo} alt="logo" />
          </span>
          <span className={style.name_admin}>22 Дюйма </span>
          <button className={style.closeBtn} onClick={menuClose}> <IconClose/> </button>
        </div>
        <div className={style.sidebar_content}>
          <ul onClick={menuClose}>
            <li>
              <NavLink to='/tires' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconTires/></span>
                <span className={style.name_sidebar}>Шини</span>
              </NavLink>
              
            </li>
            <li>
              <NavLink to='/next' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconMaterial/></span>
                <span className={style.name_sidebar}>Минуле</span>
              </NavLink> 
            </li>
            <li>
              <NavLink to='/consumables' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconMaterial/></span>
                <span className={style.name_sidebar}>Розхідні матеріали</span>
              </NavLink> 
            </li>
            <li>
              <NavLink to='/Type_of_work' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconWorks/></span>
                <span className={style.name_sidebar}>Вид роботи</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Online_queue' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconOnlineQueue/></span>
                <span className={style.name_sidebar}>Онлайн черга</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Tire_storage' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconStorage/></span>
                <span className={style.name_sidebar}>Зберігання шин</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Debtors' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconDebtor/></span>
                <span className={style.name_sidebar}>Боржники</span>
              </NavLink>
            </li>
            <li className={style.line_sidebar}><hr /></li>
            <li>
              <NavLink to='/settings' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconSettings/></span>
                <span className={style.name_sidebar}>Налаштування</span>
              </NavLink>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Sidebar;
