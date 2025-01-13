import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchForecast = createAsyncThunk(
    'data/fetchForecast',
    async function(city, {rejectWithValue}) {    
        try {
            const configuration = {
                url: BASE_URL,
                key: API_KEY,
                q: city,
                days: 14,
            }
            const fullURL = configuration.url + "?key=" + configuration.key + "&q=" + configuration.q + "&days=" + configuration.days;

            const response = await fetch(fullURL);
            if(!response.ok) throw new Error('Server Error!');
            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        kindForecast: 0,
        isLoading: true,
        forecast: {},
        error: null,
    },
    reducers: {
        changeKindForecast(state, action) {
            state.kindForecast = action.payload.kindForecast;
        },
        toggleLoadingIndicator(state, action) {
            state.isLoading = action.payload.isLoading;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecast.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.isLoading = false;
                state.forecast = action.payload;
            })
            .addCase(fetchForecast.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const { changeKindForecast, toggleLoadingIndicator } = dataSlice.actions;
export default dataSlice.reducer;
