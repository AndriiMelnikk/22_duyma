import React, { FC } from 'react';

import { ReactComponent as IconSort} from '../../img/icons/table/sort.svg';

import { ReactComponent as IconPlus} from '../../img/icons/static/plus.svg'

import {BlockNumbers} from '../../components/Block';
import Table from '../../components/Table';
import OneBlock from '../../components/OneBlock';

import style from "./users.module.scss"
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Chip from '../../ui/chip';
import { CheckBox } from '../../ui/input';
import Profile from './Profile';
import {Task, BlockNumber, User} from '../../ts/works_'
import Loader from '../../components/Loader';
import { BackgroundColor } from '../../ts/ul';

interface Props{
    task:Task[],
    blockNumber: BlockNumber[],
    unresolvedTickets:BlockNumber[],
    usersTable:User[],
    profile:User,
    setProfile:(info:User)=> void,
    loaderTable: boolean
}

const Users: FC<Props> = ({task, blockNumber, unresolvedTickets, usersTable, profile, setProfile, loaderTable}) =>  {

    return (
        <div>
            <div>
                <BlockNumbers infoBlock={blockNumber}/> 
            </div>
            <div className={style.usersContent}>
                <Routes>
                    <Route path='/'  element={<UsersContent usersTable={usersTable} task={task}  loaderTable={loaderTable} unresolvedTickets={unresolvedTickets} setProfile={setProfile}/>} />
                    <Route path='/*' element={<Profile profile={profile}/>} />
                </Routes>
            </div>

        </div>
    );
}

export default Users;


/* UsersContent */
interface UsersContent_P{
    task:Task[],
    unresolvedTickets:BlockNumber[],
    usersTable:User[],
    setProfile:(info:User)=> void,
    loaderTable:boolean
}

const UsersContent:FC<UsersContent_P> =({task, usersTable , unresolvedTickets, setProfile, loaderTable})=>{
    const navigate = useNavigate();
    return(
        <>
            <div>
                <OneBlock 
                    name="All users"
                    rightContent={<><IconSort/><span>Sort</span></>}
                    rightClick={()=>{ alert('Sort')}}>
                    {loaderTable ?  <Loader/> : <Table table={usersTable} clickTr={setProfile}/> }
                    
                </OneBlock>  
            </div>
            <div className={style.viewDetails}>
                <OneBlock 
                    name='Unresolved tickets'  
                    rightContent={<Link to="/">View details</Link>}
                    description={<>Group: <span>Support</span></>}
                    rightClick={()=>{ navigate('/')}}
                    >
                    <UnresolvedTickets unresolvedTickets={unresolvedTickets}/>
                </OneBlock>
                <OneBlock
                    name='Tasks'
                    rightContent={<Link to="/">View details</Link>}
                    description={<>Today</>}
                    rightClick={()=>{ navigate('/')}}
                    >
                    <Tasks task={task}/>
                </OneBlock>
            </div>
        </>
    )
}
/* UnresolvedTickets */
interface UnresolvedTickets_P{
    unresolvedTickets:BlockNumber[]
}
const _UnresolvedTickets: FC<UnresolvedTickets_P> =({unresolvedTickets})=>{

    const List = unresolvedTickets.map((e, index)=>{
        return(
            <li key={index}>
                <div className={style.nameLI}>
                    <h4>{e.name}</h4>
                </div>
                <div className={style.numberLI}>
                    <span>{e.number}</span>
                </div>
            </li>
        )
    })

    return(
        <ul className={style.blockList}>
            {List}
        </ul>
    )
}
const UnresolvedTickets = React.memo(_UnresolvedTickets)
/* Tasks */
interface Tasks_P{
    task:Task[]
}
const _Tasks:FC<Tasks_P> =({task})=>{
    const addTask =()=>{
        alert('addTask')
    }

    const List = task.map((e, index)=>{
        let color;

        switch (e.date) {
            case 'default':
                color = BackgroundColor.default
                break;
            case 'new':
                color = BackgroundColor.green
            break;
            case 'urgent':
                color = BackgroundColor.yellow
            break;
            default:
                color = BackgroundColor.default
                break;
        }

        return(
            <li key={index}>
            <div className={style.nameLI}>
                <h4><CheckBox name={e.name + '__name'}  checked={e.checked}  disabled={e.checked} text={e.name}/></h4>
            </div>
            <div className={style.numberLI}>
                <Chip background={color} text='urgent' border='borderSmall' />
            </div>
        </li>
        )
    })

    return(
        <ul className={style.blockList}>
            <li>
                <div className={style.nameLI}>
                    <h4 className={style.disableText}>Create new task</h4>
                </div>
                <div className={style.numberLI}>
                    <button onClick={addTask}><IconPlus/></button>
                </div>
            </li>
            {List}
            {/* <li>
                <div className={style.nameLI}>
                    <h4><CheckBox name='one' text="Finish ticket update"/></h4>
                </div>
                <div className={style.numberLI}>
                    <Chip background={BackgroundChip.yellow} text='urgent' border='borderSmall' />
                </div>
            </li>
            <li>
                <div className={style.nameLI}>
                    <h4><CheckBox name='one' text="Create new ticket example" /></h4>
                </div>
                <div className={style.numberLI}>
                    <Chip background={BackgroundChip.green} text='new'  border='borderSmall'/>
                </div>
            </li>
            <li>
                <div className={style.nameLI}>
                    <h4><CheckBox name='one' checked={true} disabled={true}  text="Update ticket report"/></h4>
                </div>
                <div className={style.numberLI}>
                    <Chip background={BackgroundChip.default} text='default' border='borderSmall' />
                </div>
            </li> */}
    </ul>
    )
}
const Tasks = React.memo(_Tasks)