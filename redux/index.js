import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/authSlices';

const store = configureStore({
    reducer: {
        auth
    }
})

export default store