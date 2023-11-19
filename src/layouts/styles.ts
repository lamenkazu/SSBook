import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from './../styles/deviceBreakpoints';

export const Container = styled.div`
    max-width: min(100%, ${DEVICE_BREAKPOINTS.MD});
    margin: 0 auto;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 5rem auto auto;

    grid-template-areas: 
        "header"
        "main"
        "bottom"
    ;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        grid-template-rows: 7.2rem 1fr auto;

        grid-template-columns: 100vw;

        margin: 0;

        grid-template-areas: 
            "header"
            "main"
            "footer"
        ;
    }
`;
