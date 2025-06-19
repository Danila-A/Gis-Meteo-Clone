import { Error } from "../../components/Error/Error";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { forecastApi } from "../../store/Apis/forecastApi";
import { useAppSelector } from "../../store/hooks";
import { selectCity } from "../../store/Slices/dataSlice";

export const withSkeleton = <P extends object>(Component: React.ComponentType<P>) => {

  return function WithSkeleton(props: P) {
    const { isFetching, isError } = forecastApi.endpoints.getForecast.useQueryState(useAppSelector(selectCity), {
      selectFromResult: ({isFetching, isError }) => ({isFetching, isError}) 
    });

    if (isFetching) return <Skeleton />
    if (isError) return <Error />

    return <Component {...props} />
  }
  
}
