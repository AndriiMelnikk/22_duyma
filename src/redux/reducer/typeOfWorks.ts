import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {TypOfWorks_api} from '../../api/typeOfWorks';
import {TypeOfWorksState, dateUpdateWorkId} from '../../ts/typeOfWorks';

const initialState : TypeOfWorksState = {
    loaderScreen: true,
    loaderWork: false,
    loaderUpdateWork: false,
    allWork: [],
    infoWork: [],
    detailsWork: {
        id: 0,
        id_work: 0,
        name: '',
        prise: 0
    },
    selectWork: '',
};

export const typOfWorkSlice = createSlice({
    name: 'works',
    initialState,
    reducers: {
        clearState: (state) => {
            state.allWork = [];
            state.infoWork = [];
            state.loaderScreen = true;
            state.loaderWork = false;
        },
        setDetailsWork: (state, action : PayloadAction < TypeOfWorksState['detailsWork'] >) => {
            state.detailsWork = action.payload
        },
        setSelectWork: (state, action : PayloadAction < TypeOfWorksState['selectWork'] >) => {
            state.selectWork = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetAllWorks.pending, (state) => {
            state.loaderScreen = true;
        })
        builder.addCase(GetAllWorks.fulfilled, (state, action) => {
            state.loaderScreen = false;
            state.allWork = action.payload
        })

        builder.addCase(PostIdWork.pending, (state) => {
            state.loaderWork = true;
        })
        builder.addCase(PostIdWork.fulfilled, (state, action) => {
            state.loaderWork = false;
            state.infoWork = action.payload
        })

        builder.addCase(UpdateWorkId.pending, (state) => {
            state.loaderUpdateWork = true;

        })
        builder.addCase(UpdateWorkId.fulfilled, (state) => {
            state.loaderUpdateWork = false;
        })
        builder.addCase(UpdateWorkId.rejected, (state) => {
            state.loaderUpdateWork = false;

        })
    }
});

export const GetAllWorks = createAsyncThunk('works/getAllWorks', async() => {
    const response = await TypOfWorks_api.getAllWork()
    return response;
})
export const PostIdWork = createAsyncThunk('works/postIdWork', async(id : number) => {
    const response = await TypOfWorks_api.postWortToID(id)
    return response;
})

export const UpdateWorkId = createAsyncThunk('works/updateWorkId', async(date : dateUpdateWorkId, {rejectWithValue}) => {
    const response = await TypOfWorks_api.updateWorkId(date);
    return response;
})

export const {
    clearState,
    setDetailsWork,
    setSelectWork
} = typOfWorkSlice.actions;

export default typOfWorkSlice.reducer;
