import styled, {css} from "styled-components";

const getWidthBasedOnTabSize = (tabSize) => {
    switch(tabSize){
        case "small": return css`
          width: 80px;
        `
        case "large": return css`
          width: 180px;
        `
        case "auto": return css`
          width: auto;
        `
    }
}

export const TabItem = styled.label`
  background: ${({isActive}) => isActive ? "black" : "grey"};
  color: ${({isActive}) => isActive ? "white" : "black"};
  height: 40px;
  margin: 10px 20px;
  transition: background .3s, color .3s;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    display: none;
  }
  padding: 0 10px;
  ${({tabSize}) => tabSize && css`
    ${getWidthBasedOnTabSize(tabSize)}
  `}
`