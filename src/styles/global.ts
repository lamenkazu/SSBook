import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 .2rem ${({ theme }) => theme.GRAY_100};
    }

    body{
        background-color: ${({ theme }) => theme.BACKGROUND};
        color: ${({ theme }) => theme.GRAY_400};

        -webkit-font-smoothing: antialiased;

        overflow-x: hidden;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
    } 

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 200ms;
    }

    button:hover, 
    a:hover{
        filter: brightness(0.9)
    }

    ::-webkit-scrollbar{
        width: 0;
    }

    ::-webkit-scrollbar-thumb {
        background-color: transparent; /* para navegadores baseados em WebKit (Chrome, Safari, etc.) */
    }
    ::-webkit-scrollbar-track {
        background-color: transparent; /* para navegadores baseados em WebKit (Chrome, Safari, etc.) */
    }
`;
