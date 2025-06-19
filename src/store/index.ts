import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './Slices/dataSlice';
import { forecastApi } from "./Apis/forecastApi";

export const store = configureStore({
    reducer: {
        data: dataReducer,
        [forecastApi.reducerPath]: forecastApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(forecastApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
