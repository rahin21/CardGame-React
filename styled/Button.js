import styled from "styled-components"


export const Button = styled.button`
  padding: 10px 18px;
  gap: 10px;
  width: 220px;
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover{
    border: 1px solid black;
    background-color: white;
    color: black;
    transition: 0.3s background ease-in;
  }

`

export const ButtonOutlined = styled(Button)`
   
  border: 1px solid black;
  background-color: white;
  color: black;
  transition: 0.4s background ease-in;

  &:hover{
    border: 1px solid black;
    background-color: black;
    color: white;
    transition: 0.3s background ease-in;
  }
`