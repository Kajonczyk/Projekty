import styled, {css} from "styled-components";

export const TabItem = styled.label`
  height: 35px;
  margin: 0 5px;
  border-radius: 8px;
  transition: background .3s, color .3s;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    display: none;
  }
  padding: 0 10px;
`