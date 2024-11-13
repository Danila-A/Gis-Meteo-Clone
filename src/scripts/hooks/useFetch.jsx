import { useEffect, useState } from "react"
import { getLocation, getWetherAxios, getWetherOpenMeteo } from "../api/getWether";

const useFetch = (place) => {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState(null);
  
    useEffect(()=>{
      (async () => {
        const response = await getLocation(place);
        setLocation(response);
      })(); 
    },[]);

    useEffect(() => {
      (async () => {
        const response = await getWetherAxios(location.data[0].latitude, location.data[0].longitude);
        setData(response);
      })(); 
    },[location]);

    return data;
}

export default useFetch;
