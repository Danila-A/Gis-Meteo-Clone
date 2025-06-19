import { selectCity } from "../../store/Slices/dataSlice";
import { forecastApi } from "../../store/Apis/forecastApi";
import { useAppSelector } from "../../store/hooks";
import { useFilter } from "./useFilter";

export const useGetForecast = () => {
    const { data } = forecastApi.endpoints.getForecast.useQueryState(useAppSelector(selectCity), {
        selectFromResult: ({data}) => ({data})
    });
    return useFilter(data);
}
