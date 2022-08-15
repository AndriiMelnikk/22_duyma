import React, {useEffect} from 'react';
import Type_of_works from '.';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {GetAllWorks, clearState} from '../../redux/reducer/typeOfWorks';

function TypeOfWorksComponent() {
    const {loaderScreen, loaderWork, allWork, infoWork} = useAppSelector(state => state.typOfWorkSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(GetAllWorks());

        return () => {
            dispatch(clearState())
        }
    }, []);

    return (<Type_of_works
        loaderScreen={loaderScreen}
        loaderWork={loaderWork}
        infoWork={infoWork}
        allWork={allWork}/>);
}

export default TypeOfWorksComponent;