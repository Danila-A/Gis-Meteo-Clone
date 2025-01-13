import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFilter } from "../scripts/hooks/useFilter";

// http://api.weatherapi.com/v1/forecast.json?key=0d65cb3ac45940d289a191409241112&q=Москва&days=13

export const fetchForecast = createAsyncThunk(
    'data/fetchForecast',
    async function(city, {rejectWithValue}) {    
        try {
            configuration = {
                url: 'http://api.weatherapi.com/v1/forecast.json',
                key: '0d65cb3ac45940d289a191409241112',
                q: city,
                days: 14,
            }
            const fullURL = configuration.url + "?key=" + configuration.key + "&q=" + configuration.q + "&days=" + configuration.days;

            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
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
        city: 'Москва',
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
        setCity(state, action) {
            state.city = action.payload.city;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecast.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.isLoading = false;
                const filtered = useFilter();
                state.forecast = filtered(action.payload);
            })
            .addCase(fetchForecast.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const { changeKindForecast, toggleLoadingIndicator, setCity } = dataSlice.actions;
export default dataSlice.reducer;
