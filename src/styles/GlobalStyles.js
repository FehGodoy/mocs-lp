import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,body{
    overflow-x:hidden;
    font-family: var(--font);
    background-color: var(--backgroundPrimary);
    scroll-behavior: smooth;

    @media screen and (max-width:991px){
        overflow: auto;
    }

}

:root{
    --font: 'Poppins', sans-serif;
    --backgroundPrimary: #0E0E0E;
    --orange: #EF4023;
    --greenDark: #131C1D;
    --silver: #C4C4C4;
    --white: #fff;
    --black:#000;
    --greenDark: #131C1D;
}

`;