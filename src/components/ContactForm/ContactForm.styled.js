import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 30px;
  color: white;
  margin: 0;
  margin-bottom: 20px;

  text-align: center;
`;

export const FormContact = styled.form`
  text-align: center;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 5px;
`;

export const Btn = styled.button`
  display: block;
  margin: 0 auto;

  width: 170px;
  padding: 5px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0px #000000;

  color: orange;
  cursor: pointer;
  :hover,
  :focus {
    color: red;
  }
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
  height: 25px;

  outline: none;
  border: none;

  border-radius: 5px;
  box-shadow: 5px 5px 15px 0px #000000;
`;
