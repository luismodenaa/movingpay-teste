import styled from "styled-components";

export const InputBox = styled.div`
  position: relative;

  span {
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    pointer-events: none;
    font-size: 1em;
    transition: 0.5s;
    color: white;
  }

  .eye-password {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    padding: 20px 20px;
    cursor: pointer;
    transition: 0.2s;
    color: white;
    &:hover {
      color: #03b0e6;
    }
  }

  .error-message {
    color: #4f4f4f;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    padding: 1.2rem;
    margin-bottom: 2rem;
    width: 16rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2000px);
    outline: none;
    transition: 0.3s;
    font-size: 18px;
  }

  input:valid ~ span,
  input:focus ~ span {
    color: blueviolet;
    transform: translateX(10px) translateY(-10px);
    font-size: 1rem;
    padding: 3px 10px;
    background: rgb(164, 205, 79);
    background: linear-gradient(
      27deg,
      rgba(164, 205, 79, 1) 3%,
      rgba(3, 176, 230, 1) 100%
    );

    border-radius: 4px;
    color: white;
  }

  input:valid,
  input:focus {
  }
`;
