

const withSkeleton = (Component) => {
  return function WithSkeleton(props) {
    const {isLoading, ...restProps} = props;

    if (isLoading) return <p>Loading...</p>

    return <Component {...restProps} />
  }
}

export default withSkeleton;
