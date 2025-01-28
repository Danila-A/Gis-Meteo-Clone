import { Error } from "../../components/Error/Error";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { useAppSelector } from "../../store/hooks";

export const withSkeleton = <P extends object>(Component: React.ComponentType<P>) => {
  return function WithSkeleton(props: P) {
    const isLoading = useAppSelector(state => state.data.isLoading);
    const error = useAppSelector(state => state.data.error);

    if (isLoading) return <Skeleton />
    if (error) return <Error />

    return <Component {...props} />
  }
}
