import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

interface SpanProps{
    $isactive?:string;
  }

export const Container = styled.div`
    grid-area: bottom;
    width: 100%;
    height: 5.6rem;

    background: ${({theme}) => theme.WHITE};

    box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.08);

    position: fixed;
    bottom: 0;

    display: flex;
    gap: 2.6rem;
    padding-inline: 1.9rem;
    justify-content: center;


    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        display: none;
   
    }
`;

export const NavItem = styled.button`
    background: none;
    border: none;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    height: 100%;
    width: 7.2rem;

    color: ${({theme}) => theme.GRAY_200};

    >span{
        font-size: 1rem;
        font-weight: 500;
    }
`

export const Span = styled.span<SpanProps>`
    color: ${({theme, $isactive}) => $isactive === 'true' ? theme.PURPLE : theme.GRAY_200}
`
