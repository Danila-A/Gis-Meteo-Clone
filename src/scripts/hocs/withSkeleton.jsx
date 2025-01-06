import Skeleton from "../../components/Skeleton/Skeleton";

const withSkeleton = (Component) => {
  return function WithSkeleton(props) {
    const {isLoading, ...restProps} = props;

    if (isLoading) return <Skeleton />

    return <Component {...restProps} />
  }
}

export default withSkeleton;
