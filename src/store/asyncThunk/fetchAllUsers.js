import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUser } from "../../api/index";


const fetchAllUsers =  createAsyncThunk(
    'users/getUsers',
    async (payload, thunkAPI) => {
              const response = await getAllUser()
        
              console.log(response);

        return response.data


    }
)


export { fetchAllUsers }


