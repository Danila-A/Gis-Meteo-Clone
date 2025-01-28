import axios from "axios";
import { Weather } from "../../interfaces";

const API_KEY=import.meta.env.VITE_API_KEY;

export async function getTestWeather(city: string): Promise<Weather | null> {
   try {
        const response = await axios.get<Weather>('http://api.weatherapi.com/v1/forecast.json', {
            params: {
                key: API_KEY,
                q: city,
                days: 13,
            }
        });
        return response.data;
    }
    catch(error) {
        console.error(error);
        return null;
    }
}
