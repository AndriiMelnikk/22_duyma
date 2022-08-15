import React, {FC, useState} from 'react';
import { useDispatch } from 'react-redux';
import NamePriseNumberBlock from '../../components/Block/Blocks/Name_Prise_Number';
import Loader from '../../components/Loader';
import ModalInfoEdit from '../../components/Modal/Modals/infoEdit';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import AlertMessages, { setNewAlert } from '../../redux/reducer/alertMessages';
import {GetAllConsumables, setAddressStoreConsumables, setInfoConsumables} from '../../redux/reducer/consumables';
import {AllBD, ConsumablesToID} from '../../ts/consumables';
import {BackgroundColor} from '../../ts/ul';
import Button from '../../ui/button';
import {RadioInput} from '../../ui/input';

import style from './index.module.scss';

interface Props {
    allConsumables : ConsumablesToID[],
    loaderConsumables : boolean,
    loaderAllConsumables : boolean,
    allBD : AllBD[],
    addressStore: string,
}

const Consumables : FC < Props > = ({allConsumables, loaderConsumables, allBD, loaderAllConsumables, addressStore}) => {


    const [M_InfoConsumables,
        setM_InfoConsumables] = useState < boolean > (false);

    const [R_StoreGroup,
        setR_StoreGroup] = useState < number > (0);

    const [M_InputValue,
        setM_InputValue] = useState < string > ('');

    const {infoConsumables} = useAppSelector(state => state.consumablesSlice)

    const dispatch = useAppDispatch()

    const ActiveBlock = (block : any) => {
        dispatch(setInfoConsumables(block))
        setM_InfoConsumables(true)

    }

    const blockWork = allConsumables.length ?  <NamePriseNumberBlock infoBlock={allConsumables} _onClick={ActiveBlock}/> : <h2>Скад пустий</h2>

    const Info = [
        ["Назва", infoConsumables.name],
        ["Кількість", `${infoConsumables.number} шт.`],
        ["Ціна", `${infoConsumables.prise} грн.`]
    ]

    const ConsumablesIdBD = ({ address, id}:AllBD) => {
        dispatch(GetAllConsumables(id))
        dispatch(setAddressStoreConsumables(address))
        setR_StoreGroup(id)
    }


    const GroupAllBD = allBD.map(bd => {
        return (<RadioInput
            key={bd.id}
            name='allStore'
            text={bd.address}
            value={bd.id}
            checked={R_StoreGroup}
            setChecked={()=>{ConsumablesIdBD(bd)}}/>)
    })

    if (loaderConsumables) {
        return <Loader/>
    } else {

        return (
            <div>
                <ModalInfoEdit
                    headerText="Ред. розхідній матеріал"
                    selectText={addressStore}
                    valueInput={M_InputValue}
                    setValueInput={setM_InputValue}
                    labelName="Властивісь"
                    inputPlaceholder="Нове значення"
                    listBtn={< ButtonsToModal value = {
                    M_InputValue
                } />}
                    listInfo={Info}
                    loader={false}
                    visible={M_InfoConsumables}
                    setVisible={setM_InfoConsumables}/>

                <div className={style.headerStore}>
                    <h3>Склади:</h3>
                    {GroupAllBD}
                </div>

                <div className={style.contentBlock}>{loaderAllConsumables
                        ? <Loader/>
                        : blockWork}</div>
            </div>
        );
    }
}

export default Consumables;

interface TypeButtonToModal {
    value : string
}

const ButtonsToModal : FC < TypeButtonToModal > = ({value}) => {

    const dispatch = useDispatch()


    const AddConsumables = () => {
        dispatch(setNewAlert({id: 0, message: 'повідомлення...', text: "Заголовок", background: BackgroundColor['green']}))
    }

    return (
        <div>
            <Button
                background={BackgroundColor.yellow}
                text='Додати'
                _click={AddConsumables}/>
            <Button background={BackgroundColor.yellow} text='Відняти' _click={AddConsumables}/>
            <Button background={BackgroundColor.yellow} text='Перенести' _click={AddConsumables}/>
            <Button background={BackgroundColor.yellow} text='Змінити ціну' _click={AddConsumables}/>
            <Button background={BackgroundColor.yellow} text='Змінити Назву' _click={AddConsumables}/>
            <Button background={BackgroundColor.red} border={'border'} text='Видалити' _click={AddConsumables}/>
        </div>
    )
}