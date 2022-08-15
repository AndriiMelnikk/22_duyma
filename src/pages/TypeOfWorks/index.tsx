import React, {ChangeEvent, FC, useState} from 'react';
import NamePriseNumberBlock from '../../components/Block/Blocks/Name_Prise_Number';
import Loader from '../../components/Loader';
import ModalInfoEdit from '../../components/Modal/Modals/infoEdit';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setNewAlert} from '../../redux/reducer/alertMessages';
import {PostIdWork, setDetailsWork, setSelectWork, UpdateWorkId} from '../../redux/reducer/typeOfWorks';
import {Messages} from '../../ts/alertMessages';
import {AllWork, updateWorkType, WortToID} from '../../ts/typeOfWorks';
import {BackgroundColor} from '../../ts/ul';
import Button from '../../ui/button';
import Select from '../../ui/select';
import style from './index.module.scss';

interface Props {
    loaderScreen : boolean,
    loaderWork : boolean,
    allWork : AllWork[],
    infoWork : WortToID[]
}

const Type_of_works : FC < Props > = ({loaderScreen, allWork, infoWork, loaderWork}) => {

    const [MV_infoIdWork,
        setMV_infoIdWork] = useState < boolean > (false);

    let [idSelect,
        setIdSelect] = useState < number > (0);

    const [M_InputValue,
        setM_InputValue] = useState < string > ('');

    const dispatch = useAppDispatch();
    const {detailsWork, selectWork, loaderUpdateWork} = useAppSelector(state => state.typOfWorkSlice);

    const getWorkId = (event : ChangeEvent < HTMLSelectElement >) => {
        dispatch(setSelectWork(event.target.selectedOptions[0].text))
        dispatch(PostIdWork(Number(event.target.value)))
        setIdSelect(Number(event.target.value))
    }

    const ActiveBlock =(block:any)=>{
        dispatch(setDetailsWork(block))
        setMV_infoIdWork(true)
    }



    const blockWork = <NamePriseNumberBlock infoBlock={infoWork} _onClick={ActiveBlock}/>

    const Info = [
        ["Назва", detailsWork.name],
        ["Ціна", `${detailsWork.prise} грн.`]
    ]


    const Options = allWork.map((e : AllWork) => (
        <option key={e.id} value={e.id}>{e.name}</option>
    ))

    if (loaderScreen) 
        return (<Loader/>)
    return (
        <div>
            <Select name='Оберіть вид роботи' selectF={getWorkId}>{Options}</Select>

            <ModalInfoEdit
                headerText="Ред. вид роботи"
                selectText={selectWork}
                valueInput={M_InputValue}
                setValueInput={setM_InputValue}
                labelName="Властивісь"
                inputPlaceholder="Нове значення"
                listBtn={< ButtonsToModal value = { M_InputValue} idSelect={idSelect} valueInput={setM_InputValue} visibleModal={setMV_infoIdWork} />}
                listInfo={Info}
                loader={loaderUpdateWork}
                visible={MV_infoIdWork}
                setVisible={setMV_infoIdWork}/> {loaderWork
                ? <Loader/>
                : <div className={style.contentBlock}>{blockWork}</div>}
        </div>
    );
};

export default Type_of_works;

interface TypeButtonToModal {
    value : string;
    idSelect: number;
    valueInput: (value: string)=>void;
    visibleModal: (visible: boolean)=>void;

}

const ButtonsToModal : FC < TypeButtonToModal > = ({value, idSelect, valueInput, visibleModal}) => {

    const {detailsWork} = useAppSelector(state => state.typOfWorkSlice);

    const dispatch = useAppDispatch();

    const UpdateInfoWork = async(type : updateWorkType) => {

        if (type === updateWorkType['prise']) {
            if (Number(value)) {
                const res = await dispatch(UpdateWorkId({id: detailsWork.id, valueWork: value, updateWork: type}))
                _Res(res)
            } else {
                _Alert({id: 0, message: 'Введіть число.', text: "Помилка", background: BackgroundColor['red']})
            }
        } else if (type === updateWorkType['name']) {
            if (value) {
                const res = await dispatch(UpdateWorkId({id: detailsWork.id, valueWork: value, updateWork: type}))
                _Res(res)
            } else {
                _Alert({id: 0, message: 'Заповніть поле.', text: "Помилка", background: BackgroundColor['red']})
            }
        }

        function _Res(res : any) {
            if (typeof res.payload === 'string') {
                visibleModal(false); 
                valueInput(''); 
                dispatch(PostIdWork(idSelect))
                _Alert({id: 0, message: `Новe значення: ${value}.`, text: "Оновленно", background: BackgroundColor['green']})
            } else {
                _Alert({id: 0, message: 'Спробуйте знову.', text: "Помилка", background: BackgroundColor['red']})
            }
        }

        function _Alert(data : Messages) {
            dispatch(setNewAlert({id: 0, message: data.message, text: data.text, background: data.background}))
        }

    }

    return (
        <div>
            <Button
                background={BackgroundColor.yellow}
                text='Змінити ціну'
                _click={() => UpdateInfoWork(updateWorkType['prise'])}/>
            <Button
                background={BackgroundColor.yellow}
                text='Змінити Назву'
                _click={() => UpdateInfoWork(updateWorkType['name'])}/>
            <Button background={BackgroundColor.red} border={'border'} text='Видалити'/>
        </div>
    )
}