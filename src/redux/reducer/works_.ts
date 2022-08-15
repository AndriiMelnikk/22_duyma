import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Folders_api } from '../../api/users';
import { UserState} from '../../ts/works_';

const initialState:UserState = {
    blockNumber:[
        {name: "active", number: 60},
        {name: "Online", number: 16},
        {name: "Filtered", number: 43},
        {name: "Banned", number: 64}
    ],
    task:[
        {name: "Finish ticket update", checked: false, date: 'urgent'},
        {name: "Create new ticket example", checked: false, date: 'new'},
        {name: "Update ticket report", checked: true, date: 'default'}
    ],
    unresolvedTickets:[
        {name: "Waiting on Feature Request", number: 4328},
        {name: "Awaiting Customer Response", number: 1005},
        {name: "Awaiting Developer Fix", number: 914},
        {name: "Pending", number: 281},
    ],
    usersTable:[],
    profile:{
        "id": 0,
        "name": '',
        "username": '',
        "email": '',
        "address": {
          "street": '',
          "suite": '',
          "city":  '',
          "zipcode":''
        },
        "phone": '',
        "website": '',
        "company": {
          "name": '',
          "catchPhrase": '',
        }
    },
    loaderTable: false
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setProfile:(state, action: PayloadAction<UserState['profile']>) => {
            state.profile = action.payload
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(FetchUsers.pending, (state) => {
            state.loaderTable = true;
        })
        builder.addCase(FetchUsers.fulfilled, (state, action) => {
            state.loaderTable = false;
            state.usersTable = action.payload
        })
    }
});


export const FetchUsers = createAsyncThunk(
    'users/fetchUser',
    async () => {
      const response = await Folders_api.getUsers()
      return response;
    }
  )
export const {setProfile} = usersSlice.actions;

export default usersSlice.reducer;
