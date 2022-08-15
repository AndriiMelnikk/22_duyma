import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Consumables_api} from '../../api/consumables';
import {TypeConsumables} from '../../ts/consumables';

const initialState : TypeConsumables = {
    loaderScreen: true,
    loaderAllConsumables: false,
    loaderUpdateConsumables: false,
    addressStore: '',
    allConsumables: [],
    infoConsumables: {
        id: 0,
        name: 'name',
        number: 10,
        prise: 30
    },
    allBD: []

};

export const consumablesSlice = createSlice({
    name: 'consumables',
    initialState,
    reducers: {
        clearState: (state) => {
            state.loaderScreen = true;
            state.loaderAllConsumables = false;
            state.loaderUpdateConsumables = false;
            state.addressStore = '';
            state.allConsumables = [];
            state.allBD = [];
            state.infoConsumables = {
                id: 0,
                name: 'name',
                number: 10,
                prise: 30
            }
        },
        setInfoConsumables: (state, action : PayloadAction < TypeConsumables['infoConsumables'] >) => {
            state.infoConsumables = action.payload
        },
        setAddressStoreConsumables: (state, action) => {
            state.addressStore = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetAllConsumables.pending, (state) => {
            state.loaderAllConsumables = true;
        })
        builder.addCase(GetAllConsumables.fulfilled, (state, action) => {
            state.loaderAllConsumables = false;
            state.allConsumables = action.payload
        })

        builder.addCase(GetAllBDConsumables.pending, (state) => {
            state.loaderScreen = true;
        })
        builder.addCase(GetAllBDConsumables.fulfilled, (state, action) => {
            state.loaderScreen = false;
            state.allBD = action.payload
        })
    }
});

export const GetAllConsumables = createAsyncThunk('consumables/getAllConsumables', async(id : number) => {
    const response = await Consumables_api.getConsumablesToIdBD(id)
    return response;
})

export const GetAllBDConsumables = createAsyncThunk('consumables/getAllBD', async() => {
    const response = await Consumables_api.getAllBD()
    return response;
})

export const {
    clearState,
    setInfoConsumables,
    setAddressStoreConsumables
} = consumablesSlice.actions;

export default consumablesSlice.reducer;
