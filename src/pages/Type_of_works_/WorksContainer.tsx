import React, { useEffect } from 'react';
import Users from './index';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import {  setProfile,FetchUsers  } from '../../redux/reducer/works_';
import { User } from '../../ts/works_';

function WorksContainer() {
    const { task, unresolvedTickets, blockNumber, usersTable, profile, loaderTable} = useAppSelector((state) => state.usersSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
     dispatch(FetchUsers());
    }, []);

    const infoProfile =(info:User)=>{
        dispatch(setProfile(info));
    }

    return ( <Users
         task={task} 
         blockNumber={blockNumber} 
         unresolvedTickets={unresolvedTickets} 
         usersTable={usersTable}
         profile={profile}
         setProfile={infoProfile}
         loaderTable={loaderTable}
         />);
}

export default WorksContainer;