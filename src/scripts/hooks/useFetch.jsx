import { useEffect, useState } from "react"
import { getTestWeather } from "../api/getWether";
import { useSelector, useDispatch } from "react-redux";
import { useFilter } from "./useFilter";
import { toggleLoadingIndicator } from "../../store/dataSlice";

const useFetch = () => {
    const [data, setData] = useState(null);
    const filterData = useFilter();
    const dispatch = useDispatch();
    const city = useSelector(state => state.data.city);
      
    useEffect(()=>{
      (async () => {
        dispatch(toggleLoadingIndicator({ isLoading: true }));

        const response = await getTestWeather(city);
        setData(response);

        dispatch(toggleLoadingIndicator({ isLoading: false }));
      })(); 
    },[city]);

    if (data) return filterData(data.data);
}

export default useFetch;
