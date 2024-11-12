import axios from "axios";
import { fetchWeatherApi } from "openmeteo";

export async function getWetherAxios() {
    const configuration = {
        baseURL: 'https://api.open-meteo.com/v1/forecast',
        params: {
            'latitude': 52.52,
            'longitude': 13.41,
            'hourly': 'temperature_2m'
        }
    }

    const apiRequest = axios.create(configuration);

    try {
        const response = await apiRequest.get();
        return response.data;
    }
    catch(error) {
        console.error(error);
    }
}

export async function getWetherOpenMeteo() {
    const params = {
      "latitude": 52.52,
      "longitude": 13.41,
      "hourly": "temperature_2m"
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params); 
    return responses[0];
}
