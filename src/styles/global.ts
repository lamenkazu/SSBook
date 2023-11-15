import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
        
        @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
            
            font-size: 52.5%;
            
        }

        @media(max-width: ${DEVICE_BREAKPOINTS.XS}){

            font-size: 42.5%;
            
        }
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 .2rem ${({theme}) => theme.GRAY_100};
    }

    body{
        background-color: ${({theme}) => theme.BACKGROUND};
        color: ${({theme}) => theme.GRAY_400};

        -webkit-font-smoothing: antialiased;

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
        width: .4rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({theme}) => theme.PURPLE};
        border-radius: 10rem;

    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({theme}) => theme.WHITE}
    }
`