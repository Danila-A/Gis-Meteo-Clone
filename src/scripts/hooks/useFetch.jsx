import { useEffect, useState } from "react"
import { getTestWeather } from "../api/getWether";

const useFetch = (place, setIsLoading) => {
    const [data, setData] = useState(null);
      
    useEffect(()=>{
      (async () => {
        setIsLoading(true);
        const response = await getTestWeather(place);
        setData(response);
        setIsLoading(false);
      })(); 
    },[place]);

    if (data) return data.data;
}

export default useFetch;
