import React, {FC, useState} from 'react';
import Modal from '../../components/Modal';
import {useAppDispatch} from '../../redux/hooks';
import {setNewAlert} from '../../redux/reducer/alertMessages';
import {BackgroundColor} from '../../ts/ul';

interface Props {}

const Tires : FC < Props > = () => {

    const [MV_aboutWork,
        setMV_aboutWork] = useState(false);
    const dispatch = useAppDispatch()

    const Alerts = (_header : string, message : string, type : BackgroundColor) => {
        dispatch(setNewAlert({id: 0, message: message, text: _header, background: type}))
    }

    return (
        <div >
            <Modal
                name='Дані по роботі'
                visible={MV_aboutWork}
                setVisible={setMV_aboutWork}/>

            <ul>
                <li>
                    <button onClick={() => setMV_aboutWork(true)}>
                        Показати модалку</button>
                </li>
                <li>
                    <button
                        onClick={() => Alerts('Помилка', 'повідомлення 1', BackgroundColor['red'])}>
                        Показати повідомдення - Помилка</button>
                </li>
                <li>
                    <button
                        onClick={() => Alerts('Добре', 'повідомлення 2', BackgroundColor['green'])}>
                        Показати повідомдення - Добре</button>
                </li>
                <li>
                    <button
                        onClick={() => Alerts('Застереження', 'повідомлення 3', BackgroundColor['yellow'])}>
                        Показати повідомдення - Застереження</button>
                </li>
            </ul>

        </div>
    );
};

export default Tires;
