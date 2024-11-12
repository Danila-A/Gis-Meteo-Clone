import { useEffect, useState } from "react"
import { getWetherAxios, getWetherOpenMeteo } from "../api/getWether";

const useFetch = () => {
    const [data, setData] = useState(null);
  
    useEffect(()=>{
      (async () => {
        const response = await getWetherAxios();
        setData(response);
      })(); 
    },[]);

    return data;
}

export default useFetch;
