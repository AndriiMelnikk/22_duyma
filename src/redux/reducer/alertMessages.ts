import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Messages, TypAlertMessages} from '../../ts/alertMessages';

const initialState : TypAlertMessages = {
    idMessages: 0,
    arrMessages: []
};

export const typeAlertMessagesSlice = createSlice({
    name: 'alertMessages',
    initialState,
    reducers: {
        setNewAlert: (state, action : PayloadAction < Messages >) => {
            const alert = action.payload
            state.idMessages++;
            alert.id = state.idMessages;
            state
                .arrMessages
                .push(action.payload)
        },
        removeAlert: (state, action:PayloadAction<number>) => {
            const NewArr = state.arrMessages.filter(e => e.id !== action.payload)
            state.arrMessages = NewArr
        }
    }
});

export const {
    setNewAlert,
    removeAlert
} = typeAlertMessagesSlice.actions;

export default typeAlertMessagesSlice.reducer;
