import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUser } from "../api";

const fetchAddUser = createAsyncThunk(
    'users/addUsers',
    async (payload, thunkAPI) => {
        const responce = await addUser(payload)

        console.log(responce);
        return payload
    }
)

export { fetchAddUser }
