import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RequestConfiguration, State, Weather } from "../interfaces";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialState: State = {
    kindForecast: 0,
    isLoading: true,
    forecast: null,
    error: null,
}

export const fetchForecast = createAsyncThunk<Weather, string, { rejectValue: string }>(
    'data/fetchForecast',
    async function(city, {rejectWithValue}) {    
        
            const configuration: RequestConfiguration = {
                url: BASE_URL,
                key: API_KEY,
                q: city,
                days: 3,
            }

            const fullURL: string = configuration.url + "?key=" + configuration.key + "&q=" + configuration.q + "&days=" + configuration.days;

            const response = await fetch(fullURL);
            if(!response.ok) return rejectWithValue("Server Error!");

            const data = await response.json();
                        
            return data;         
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        changeKindForecast(state, action: PayloadAction<number>) {
            state.kindForecast = action.payload;
        },
        toggleLoadingIndicator(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecast.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.forecast = action.payload;
            })
            .addCase(fetchForecast.rejected, (state, action) => {
                state.isLoading = false;
                if(action.payload) state.error = action.payload;                
            })
    }
});

export const { changeKindForecast, toggleLoadingIndicator } = dataSlice.actions;
export default dataSlice.reducer;
