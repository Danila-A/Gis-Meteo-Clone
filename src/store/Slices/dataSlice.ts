import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State } from "../../interfaces";

const initialState: State = {
    kindForecast: 0,
    city: 'Москва',
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    selectors : {
        selectCity: (state) => state.city,
        selectKindForecast: (state) => state.kindForecast,
    },
    reducers: {
        setKindForecast(state, action: PayloadAction<number>) {
            state.kindForecast = action.payload;
        },
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        },
    },
});

export const { setCity, setKindForecast } = dataSlice.actions;
export const { selectCity, selectKindForecast } = dataSlice.selectors;

export default dataSlice.reducer;
