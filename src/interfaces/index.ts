export interface Weather {
    current: Current;
    forecast: Forecast;
    location: Location;
}
interface Current {
    cloud: number;
    condition: Condition;
    dewpoint_c: number;
    dewpoint_f: number;
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    heatindex_c: number;
    heatindex_f: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
    windchill_c: number;
    windchill_f: number;
}

interface Condition {
    code: number;
    icon: string;
    text: string;
}

interface Forecast {
    forecastday: Forecastday[];
}

interface Forecastday {
    astro: Astro;
    date: string;
    date_epoch: number;
    day: Day;
    hour: Hour[];
}

interface Astro {
    is_moon_up: number;
    is_sun_up: number;
    moon_illumination: number;
    moon_phase: string;
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
}

interface Day {
    avghumidity: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avgvis_km: number;
    avgvis_miles: number;
    condition: Condition;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    maxtemp_c: number;
    maxtemp_f: number;
    maxwind_kph: number;
    maxwind_mph: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    uv: number;
}

interface Hour {
    chance_of_rain: number;
    chance_of_snow: number;
    cloud: number;
    condition: Condition;
    dewpoint_c: number;
    dewpoint_f: number;
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    heatindex_c: number;
    heatindex_f: number;
    humidity: number;
    is_day: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    snow_cm: number;
    temp_c: number;
    temp_f: number;
    time: string;
    time_epoch: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    will_it_rain: number;
    will_it_snow: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
    windchill_c: number;
    windchill_f: number;
}

interface Location {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string
    tz_id: string;
}


export interface OneDayForecast {
    city: string;
    dates: string;
    hourList: HourList[];
}

export interface HourList {
    icon: React.ReactElement;
    precipitation: React.ReactElement;
    temperature: React.ReactElement;
    title: React.ReactElement;
    windSpeed: React.ReactElement;
}

export interface ThreeDayForecast {
    city: string;
    dates: string;
    hourList: DayBlock[];
}

export type DayBlock = DayHours[];

export type DayHours = HourList & { date: React.ReactElement };


export interface State {
    kindForecast: number;
    city: string;
}
