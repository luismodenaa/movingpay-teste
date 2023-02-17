import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: rgb(164, 205, 79);
  background: linear-gradient(
    27deg,
    rgba(164, 205, 79, 1) 3%,
    rgba(3, 176, 230, 1) 100%
  );
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h1 {
    color: white;
    font-size: 24px;
    font-weight: 600;
  }

  img {
    width: 12rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p {
    color: #51626c;
  }
`;

export const SubmitButton: any = styled.button`
  border-style: none;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2000px);
  padding: 0.8rem 42%;
  border-radius: 4px;
  font-size: 16px;
  color: #51626c;
  font-weight: 600;
  margin-top: 2rem;
  cursor: ${({ loading }: any) => loading};
  transition: 0.5s;
  &:hover {
    background: linear-gradient(
      27deg,
      rgba(164, 205, 79, 1) 3%,
      rgba(3, 176, 230, 1) 100%
    );
    color: white;
  }
  display: flex;
  justify-content: center;

  span {
    position: absolute;
  }
`;

export const LinkRedirect = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: white;
`;
