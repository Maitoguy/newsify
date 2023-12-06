import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: ""
}

const userSlice = createSlice({
    name:'user',
    initialState: initialState,
    reducers:{
        signIn:(state , action) => {
            state.user = action.payload
        },

        signOut:(state , action) => {
            state.user = action.payload
        }
    }
});

export const userReducer = userSlice.reducer;

export const user = userSlice.actions;

export const userSelector = (state) => state.userReducer.user;