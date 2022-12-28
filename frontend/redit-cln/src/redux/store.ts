import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

//tạo và export store 
export default configureStore ({
    reducer: {
        user: userReducer,
    }
})