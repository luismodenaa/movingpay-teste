import { SpanLoading } from "./style";

interface ILoadingProps {
  size: string;
  border: string;
}

const Loading = ({ size, border }: ILoadingProps) => {
  return <SpanLoading size={size} border={border}></SpanLoading>;
};

export default Loading;
