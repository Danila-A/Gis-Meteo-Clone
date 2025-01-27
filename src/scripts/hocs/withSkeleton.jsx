import { Error } from "../../components/Error/Error";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { useSelector } from "react-redux";

export const withSkeleton = (Component) => {
  return function WithSkeleton(props) {
    const isLoading = useSelector(state => state.data.isLoading);
    const error = useSelector(state => state.data.error);

    if (isLoading) return <Skeleton />
    if (error) return <Error />

    return <Component {...props} />
  }
}
