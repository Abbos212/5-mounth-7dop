import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../api/index";

const fetchUsers =  createAsyncThunk(
    'users/getUsers',
    async (payload, thunkAPI) => {
              const response = await getUser()
        
              console.log(response);

        return response.data
    }
)

export { fetchUsers }


