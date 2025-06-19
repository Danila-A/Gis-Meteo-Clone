import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Weather } from "../../interfaces";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const forecastApi = createApi({
    reducerPath: 'forecastApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (build) => ({
        getForecast: build.query<Weather, string>({
            query: (city) => ({
                url: '/v1/forecast.json',
                params: {
                    key: API_KEY,
                    q: city,
                    days: 3,
                }
            })
        }),
    }),
});

export const { useGetForecastQuery } = forecastApi;
