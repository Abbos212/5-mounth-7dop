import { configureStore } from '@reduxjs/toolkit';

import usersSlice from '../reducers/usersSlice';

const store = configureStore({
    reducer: {usersSlice}
})

export default store