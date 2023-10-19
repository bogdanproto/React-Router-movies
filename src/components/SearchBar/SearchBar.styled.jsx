import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 16px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  input {
    display: inline-block;
    width: 320px;
    height: 36px;
    font: inherit;
    font-size: 18px;
    border-radius: 4px;

    padding-left: 4px;
    padding-right: 4px;
  }

  input::placeholder {
    font: inherit;
    font-size: 18px;
  }

  button {
    display: inline-block;
    width: 64px;
    height: 36px;
    border: 1px solid lightgrey;
    border-radius: 4px;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  button:hover {
    opacity: 1;
  }
`;
