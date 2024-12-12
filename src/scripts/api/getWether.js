import axios from "axios";

export async function getTestWeather(city) {
    const configuration = {
        baseURL: 'http://api.weatherapi.com/v1/forecast.json',
        params: {
            key: '0d65cb3ac45940d289a191409241112',
            q: city,
            days: 7,
        }
    }

    const apiRequest = axios.create(configuration);

    try {
        const response = await apiRequest.get();
        return response;
    }
    catch(error) {
        console.error(error);
    }
}
