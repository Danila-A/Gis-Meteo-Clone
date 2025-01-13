import Skeleton from "../../components/Skeleton/Skeleton";
import { useSelector } from "react-redux";

const withSkeleton = (Component) => {
  return function WithSkeleton(props) {
    const isLoading = useSelector(state => state.data.isLoading);

    if (isLoading) return <Skeleton />

    return <Component {...props} />
  }
}

export default withSkeleton;
