import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
outline: none;
font-family: 'Poppins', sans-serif;



}

button , a {
    cursor: pointer;
}

html, body {
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
*, *::before, *::after {
  box-sizing: inherit;
}


body {
  background-color: black;
  
}

`

export default globalStyles;