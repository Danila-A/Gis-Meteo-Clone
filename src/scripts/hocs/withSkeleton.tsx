import { Error } from "../../components/Error/Error";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { selectError, selectIsLoading } from "../../store/dataSlice";
import { useAppSelector } from "../../store/hooks";

export const withSkeleton = <P extends object>(Component: React.ComponentType<P>) => {
  return function WithSkeleton(props: P) {
    const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectError);

    if (isLoading) return <Skeleton />
    if (error) return <Error />

    return <Component {...props} />
  }
}
