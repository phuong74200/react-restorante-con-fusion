import { createSlice } from '@reduxjs/toolkit';

export const dishesSlice = createSlice({
    name: 'contact',
    initialState: {
        value: {
            form: {},
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