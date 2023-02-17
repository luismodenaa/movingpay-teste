import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  input {
    background-color: #e4e4e4;
    backdrop-filter: blur(2000px);
    border-style: none;
    padding: 10px;
    color: #51626c;
    border-radius: 6px;
    &:hover {
      background: linear-gradient(
        27deg,
        rgba(164, 205, 79, 1) 3%,
        rgba(3, 176, 230, 1) 100%
      );
      color: white;
    }
  }

  button {
    border-style: none;
    background-color: #e4e4e4;
    backdrop-filter: blur(2000px);
    padding: 10px;
    border-radius: 6px;
    font-size: 14px;
    color: #51626c;

    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background: linear-gradient(
        27deg,
        rgba(164, 205, 79, 1) 3%,
        rgba(3, 176, 230, 1) 100%
      );
      color: white;
    }
  }
`;
