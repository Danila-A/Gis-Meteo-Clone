import axios from "axios";

export async function  getWether() {
    const instance = axios.create({
        baseURL: 'https://api.gismeteo.net/v2/weather/current/4368/',
        headers: {
            'X-Gismeteo-Token': '56b30cb255.3443075',
            // 'Accept-Encoding': 'deflate, gzip',
        },
        params: {
            lang: 'en'
        }
    });

    try {
        const response = await instance.get();
        console.log(response);
    }
    catch(error) {
        console.error(error);
    }
}