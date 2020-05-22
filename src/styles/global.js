import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
}

body {
    -webkit-font-smoothing: antialiased !important;
    background:url('Pizza_Planet.jpg') no-repeat fixed top;
    background-size: cover;
    backdrop-filter: blur(3px);
    padding-top:60px;
}

body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

button{
    cursor: pointer;
}


`;
