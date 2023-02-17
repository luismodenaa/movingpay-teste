import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

export const Card: any = styled.li`
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  padding: 14px;
  border-radius: 6px;
  border-left: ${({ borderColor }: any) => `3px solid ${borderColor}`};
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    color: #51626c;
    font-weight: 600;
  }

  p {
    font-size: 12px;
  }
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const DelFinance = styled(FaTrash)`
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: #03b0e6;
  }
`;
