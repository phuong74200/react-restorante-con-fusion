import { createSlice } from '@reduxjs/toolkit';

import { FEATURED_DISHES, PROMOTIONS, LEADERS } from '../../common/mock';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        value: {
            FEATURED_DISHES,
            PROMOTIONS,
            LEADERS,
            featuredCard: [],
        },
    },
    reducers: {
        filterFeaturedCard: (state) => {
            const merged = state.value.FEATURED_DISHES
                .concat(state.value.PROMOTIONS)
                .concat(state.value.LEADERS);
            state.value = {
                ...state.value,
                featuredCard: merged.filter(item => item.featured)
            }
        },
    }
})

export const { filterFeaturedCard } = homeSlice.actions;
export const getFeaturedCard = (state) => state.home.value.featuredCard;

export default homeSlice.reducer;