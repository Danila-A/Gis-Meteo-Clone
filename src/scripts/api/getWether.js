import axios from "axios";

export async function  getWether() {

    // const configuration = {
    //     baseURL: 'https://api.gismeteo.net/v2/weather/current/4368/',
    //     headers: {
    //         'X-Gismeteo-Token': '56b30cb255.3443075',
    //         'Accept-Encoding': 'deflate, gzip',
    //     },
    //     params: {
    //         lang: 'en'
    //     }
    // }

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
        console.log(response);
    }
    catch(error) {
        console.error(error);
    }
}