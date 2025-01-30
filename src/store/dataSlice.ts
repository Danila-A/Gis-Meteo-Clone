import { PayloadAction, buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import { RequestConfiguration, State, Weather } from "../interfaces";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialState: State = {
    kindForecast: 0,
    isLoading: true,
    forecast: null,
    error: null,
}

const createAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const dataSlice = createAppSlice({
    name: 'data',
    initialState,
    selectors : {
        selectForecast: (state) => state.forecast,
        selectKindForecast: (state) => state.kindForecast,
        selectIsLoading: (state) => state.isLoading,
        selectError: (state) => state.error,
    },
    reducers: (create) => ({
        changeKindForecast: create.reducer((state, action: PayloadAction<number>) => {
            state.kindForecast = action.payload;
        }),
        toggleLoadingIndicator: create.reducer((state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }),
        fetchForecast: create.asyncThunk<Weather, string, { rejectValue: string }>(
            async (city: string, { rejectWithValue }) => {

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
            },
            {
                pending: (state) => {
                    state.isLoading = true;
                    state.error = null;
                },
                rejected: (state, action) => {
                    state.isLoading = false;
                    if (action.payload) state.error = action.payload;                    
                },
                fulfilled: (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.forecast = action.payload;
                }
            }
        ),
    }),
});

export const { changeKindForecast, toggleLoadingIndicator, fetchForecast } = dataSlice.actions;
export const { selectForecast, selectKindForecast, selectIsLoading, selectError } = dataSlice.selectors;

export default dataSlice.reducer;
