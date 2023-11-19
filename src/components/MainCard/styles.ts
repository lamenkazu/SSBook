import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.main`
    background-color: ${({theme}) => theme.WHITE};
    border-top-left-radius: 3.2rem;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.10);


    padding: 2.2rem 0rem 9rem;
    height: max-content;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        padding-right: 5%;
    }




`