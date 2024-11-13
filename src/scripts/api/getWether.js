import axios from "axios";
import { fetchWeatherApi } from "openmeteo";

export async function getWetherAxios(latitude, longitude) {
    const configuration = {
        baseURL: 'https://api.open-meteo.com/v1/forecast',
        params: {
            'latitude': latitude,
            'longitude': longitude,
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

let geocoder;

export async function getLocation(place) {
    const configuration = {
        baseURL: 'http://api.positionstack.com/v1/forward',
        params: {
            access_key: '21e24a1ee11a11880415e90d83cb7028',
            query: place
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