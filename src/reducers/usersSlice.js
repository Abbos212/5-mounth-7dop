import { createSlice } from "@reduxjs/toolkit";

import { fetchAllUsers } from "../store/asyncThunk/fetchAllUsers";

import { fetchAddUser } from "./fetchAddUser";

const initialState = {
    users: []
}


const usersSlise = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchAllUsers.fulfilled, (state,action) => {
            console.log(action);
            state.users = action.payload





        })


        // builder.addCase(fetchAllUsers.fulfilled, () => {

        // })


    }
})


export const {} = usersSlise.actions


export default usersSlise.reducer