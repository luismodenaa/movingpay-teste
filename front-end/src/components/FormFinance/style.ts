import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  padding: 3rem 2rem;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .description {
    display: flex;
    flex-direction: column;
  }

  .error-message {
    color: #4f4f4f;
    font-size: 14px;
  }

  .value-type-finance {
    display: flex;
    gap: 20px;
  }

  input,
  select {
    border: none;
    border-style: none;
    background-color: #e4e4e4;
    padding: 14px;
    border-radius: 6px;
  }

  label {
    margin-bottom: 6px;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  button {
    border-style: none;
    background-color: #e4e4e4;
    backdrop-filter: blur(2000px);
    padding: 1rem;
    border-radius: 6px;
    font-size: 14px;
    color: #51626c;
    font-weight: 600;
    margin-top: 1rem;
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
    display: flex;
    justify-content: center;

    span {
      position: absolute;
    }
  }
`;
