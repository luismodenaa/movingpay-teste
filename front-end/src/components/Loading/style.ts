import styled from "styled-components";
interface ILoadingProps {
  size: string;
  border: string;
}

export const SpanLoading: any = styled.span`
  width: ${({ size }: any) => `${size}`};
  height: ${({ size }: any) => `${size}`};
  border: ${({ border }: any) => `${border} solid #fff`};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
