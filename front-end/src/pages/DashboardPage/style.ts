import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;

  img {
    width: 7rem;
  }

  button {
    border-style: none;
    padding: 10px 20px;
    background-color: #e4e4e4;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.4s;

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

export const BodyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
