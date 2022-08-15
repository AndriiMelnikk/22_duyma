import React, {FC} from 'react';

import {useLocation, Route, Routes} from 'react-router-dom';
import style from './index.module.scss';

import {useAppSelector} from '../redux/hooks';

import PageHeader from '../components/PageHeader';
import Else from './Else';
import Home from './Home';
import Tires from './Tires';
import TypeOfWorksComponent from './TypeOfWorks/TypeOfWorksComponent';
import WorksContainer from './Type_of_works_/WorksContainer';
import Alert from '../components/Alert';
import ConsumablesComponent from './Consumables/ConsumablesComponent';

interface Props {
    setMenu : (visible : boolean) => void;
}

const Pages : FC < Props > = ({setMenu}) => {

    const {arrMessages} = useAppSelector(state => state.typeAlertMessagesSlice)

    const namePathname = useLocation()
        .pathname
        .split('/')[1];

    const menuBtn = () => {
        setMenu(true)
    }

    const ArrAlert = arrMessages.map(alert => {
        return <Alert
            key={alert.id}
            text={alert.text}
            message={alert.message}
            id={alert.id}
            background={alert.background}/>
    })

    return (
        <div className={style.page}>
            <PageHeader namePages={namePathname} menuBtn={menuBtn}/>
            <div className={style.currentPage}>
                <Routes>
                    <Route path='/' element={< Home />}/>
                    <Route path='/tires/*' element={< Tires />}/>
                    <Route path='/Type_of_work/*' element={< TypeOfWorksComponent />}/>
                    <Route path='/consumables/*' element={< ConsumablesComponent />}/>
                    <Route path='/next/*' element={< WorksContainer />}/>
                    <Route path='/*' element={< Else />}/>
                </Routes>

            </div>
            <div className={style.AlertBox}>
                {ArrAlert}
            </div>
        </div>
    );
}

export default Pages;
