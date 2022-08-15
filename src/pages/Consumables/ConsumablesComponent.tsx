import React, {FC, useEffect} from 'react';
import Consumables from '.';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {clearState, GetAllBDConsumables} from '../../redux/reducer/consumables';

const ConsumablesComponent : FC = () => {
    const {allConsumables, loaderScreen, allBD, loaderAllConsumables, addressStore} = useAppSelector(state => state.consumablesSlice)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(GetAllBDConsumables());
        return () => {
            dispatch(clearState())
        }
    }, [])
    return (<Consumables
        allConsumables={allConsumables}
        allBD={allBD}
        addressStore={addressStore}
        loaderAllConsumables={loaderAllConsumables}
        loaderConsumables={loaderScreen}/>);
}

export default ConsumablesComponent;