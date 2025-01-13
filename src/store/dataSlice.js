import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        kindForecast: 0,
        isLoading: true,
        city: 'Москва'
    },
    reducers: {
        changeKindForecast(state, action) {
            state.kindForecast = action.payload.kindForecast;
        },
        toggleLoadingIndicator(state, action) {
            state.isLoading = action.payload.isLoading;
        },
        setCity(state, action) {
            state.city = action.payload.city;
        }
    },
});

export const { changeKindForecast, toggleLoadingIndicator, setCity } = dataSlice.actions;
export default dataSlice.reducer;
