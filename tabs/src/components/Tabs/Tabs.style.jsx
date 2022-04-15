import styled from "styled-components"

export const TabsWrapper = styled.div`
  display: flex;
  position: relative;
`


export const Underline = styled.div`
  height: 4px;
  width: ${({size}) => size}px;
  background: cyan;
  position: absolute;
  left: ${({left}) => 20 + left}px;
  transition: left .3s;
  top: 50px;
  
`
