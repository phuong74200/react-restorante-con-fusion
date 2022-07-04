import { createSlice } from '@reduxjs/toolkit';

import { LEADERS } from '../../common/mock';

export const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        value: {
            LEADERS,
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

export const { filterFeaturedCard } = aboutSlice.actions;
export const getLeaders = (state) => state.about.value.LEADERS;

export default aboutSlice.reducer;