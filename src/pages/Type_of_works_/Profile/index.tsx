import React, { FC } from 'react';

import style from "./profile.module.scss"

import AvatarTable from "../../../img/static/avatar_table.jpg";
import { User } from '../../../ts/works_';
import { Link } from 'react-router-dom';

interface Props {
    profile:User
}

const Profile: FC<Props> = ({profile}) =>  {
    
    return (
        <div className={style.block}>
            <div className={style.headerProfile}>
                <div className={style.fonImg}></div>
                <div className={style.infoHeder}>
                    <div className={style.avatar}>
                        <img src={AvatarTable} alt="avatar" />
                    </div>
                    <div className={style.text}>
                        <h1>{profile.name}</h1>
                        <h3>{profile.company.catchPhrase}</h3>
                    </div>
                    
                </div>
            </div>
            <div className={style.content}>
                <ul>
                    <li>
                        <h2>Address</h2>
                        <span>
                        {profile.address.street}, {profile.address.suite},
                        <br />
                        {profile.address.city}, {profile.address.zipcode}
                        </span>
                    </li>
                    <li>
                        <h2>Phone</h2>
                        <span>{profile.phone}</span>
                    </li>
                    <li>
                        <h2>Website</h2>
                        <span onClick={()=> window.location.href = "https://"+profile.website}>
                            <Link to="#"  target="_blank">{profile.website}</Link>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;

