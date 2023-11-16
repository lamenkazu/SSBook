import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from './../styles/deviceBreakpoints';

export const Container = styled.div`
    max-width: min(100%, ${DEVICE_BREAKPOINTS.MD});
    margin: 0 auto;

    display: grid;
    grid-template-columns: 100vw; //Muda para apenas 1 coluna
    grid-template-rows: 10.4rem 37rem auto 5.6rem;

    grid-template-areas: 
        "header"
        "favoriteBooks"
        "card"
        "bottomNav"
    ;
`;
