import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  div > p {
    color: #51626c;
    font-weight: 600;
  }

  div > span {
    color: #03b0e6;
    font-weight: 700;
  }

  p {
    color: #51626c;
  }
`;
