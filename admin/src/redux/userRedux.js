import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:{
        users: [],
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        userStart:(state)=>{
            state.isFetching = true
        },
        userFailure:(state, action)=>{
            state.isFetching = false;
            state.error = true;
        },
        loginSuccess:(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        userSuccess:(state, action)=>{
            state.isFetching = false;
            state.users = action.payload;
        },
        updateUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users[
              state.users.findIndex((user) => user._id === action.payload._id)
            ] = action.payload;
          },
        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(
                state.users.findIndex((user)=> user._id === action.payload),
                1
            );
        }
    }
})

export const { userStart, 
               loginSuccess, 
               userFailure, 
               userSuccess, 
               updateUserSuccess,
               deleteUserSuccess,
                                } = userSlice.actions
export default userSlice.reducer;