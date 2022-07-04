import { createSlice } from '@reduxjs/toolkit';

import { DISHES } from '../../common/mock';

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        value: {
            DISHES,
            selectedDish: null
        },
    },
    reducers: {
        selectDish: (state, action) => {
            state.value = {
                ...state.value,
                selectedDish: action.payload
            }
        },
    }
})

export const { selectDish } = dishesSlice.actions;

export const getDishes = (state) => state.dishes.value.DISHES;
export const getSelectedDish = (state) => state.dishes.value.selectedDish;

export default dishesSlice.reducer;