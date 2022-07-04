import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from '../routes/Menu/menuSlice';
import homeReducer from '../routes/Home/homeSlice';
import aboutReducer from '../routes/About/aboutSlice';

export default configureStore({
    reducer: {
        dishes: dishesReducer,
        about: aboutReducer,
        home: homeReducer,
    }
});