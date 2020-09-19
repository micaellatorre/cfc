import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    html {
    } 
    
    body {
        margin: 0;
        background-color: #fff;
        height: 100vh;
    }
`;

export default GlobalStyle