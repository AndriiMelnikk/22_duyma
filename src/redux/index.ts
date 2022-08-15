import consumablesSlice  from './reducer/consumables';
import typeAlertMessagesSlice from './reducer/alertMessages';
import typOfWorkSlice  from './reducer/typeOfWorks';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducer/works_';


const rootReducer = combineReducers({
    usersSlice,
    typOfWorkSlice,
    typeAlertMessagesSlice,
    consumablesSlice,
});

export const Store = () => {
    return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof Store>;
export type AppDispatch = AppStore['dispatch'];
