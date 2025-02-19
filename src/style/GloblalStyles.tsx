import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    *{  
        word-break: keep-all;
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        display: none;
    }

    body{
        font-family: "Pretendard";
        background-color: #F5F5F5;  
    }
    input{
        outline: none;
        border: none;
    }

`;
