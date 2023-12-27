import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "../store/asyncThunk/fetchUsers";

import { fetchAddUser } from "./fetchAddUser";

const initialState = {
    users: []
}

const usersSlise = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log(action);
            state.users = action.payload
        })
    }
})


export const { } = usersSlise.actions

export default usersSlise.reducer