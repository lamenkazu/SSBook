import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`

    grid-area: footer;

    background-color: ${({theme}) => theme.PURPLE};
    height: 8rem;
    width: 100vw;


    padding: 1.6rem 17.2rem;

    display: flex;
    justify-content: space-between;
    align-content: start;

    align-items: center;



    >img{
        width: 7.6897rem;
        height: 2.376rem;
    }

    >p{
        width: 15.8rem;
        font-size: 1.2rem;
        color: ${({theme}) => theme.WHITE};
        text-align: right;

    }


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        display: none;
    }


`;
