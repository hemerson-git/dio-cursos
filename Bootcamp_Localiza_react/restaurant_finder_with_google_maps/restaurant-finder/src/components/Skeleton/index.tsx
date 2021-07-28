import { LoadingSkeleton } from "./styles";

type SkeletonProps = {
  width: string;
  height: string;
};

function Skeleton({ width, height }: SkeletonProps) {
  // @ts-ignore
  return <LoadingSkeleton width={width} height={height} />;
}

export default Skeleton;
