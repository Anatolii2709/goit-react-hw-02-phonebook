import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  margin: 0 auto;
  text-align: left;
`;

export const InputForm = styled.input`
  height: 24px;
  border: 1px solid black;
  border-radius: 25px;
  padding: 2px 16px;
`;

export const Button = styled.button`
  width: 120px;
  margin-top: 8px;
  cursor: pointer;
  padding: 8px 16px;
  border: none;
  border-radius: 25px;
  align-self: center;
  background-color: #dda0dd;

  &:hover {
    background-color: #8b008b;
    color: white;
  }
`;
