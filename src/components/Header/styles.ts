import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from './../../styles/deviceBreakpoints';

interface ListItemProps{
  $isselected?:string;
}

export const Container = styled.div`
  background-color: ${({theme}) => theme.WHITE};

  border-bottom-right-radius: 3.2rem;

  grid-area: 'bottomNav';

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
  }

`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5.6rem;
  align-items: center;

  
  padding: .6rem 2rem;
`;

export const Logo = styled.img`
  height: 4.4rem;
  width: 7.8rem;
`;

export const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
`;


export const Tab = styled.div`
    height: 4.8rem;
`

export const UnorderedList = styled.ul`
  display: flex;
  gap: 2rem;
`

export const ListItem = styled.li<ListItemProps>`
  list-style-type: none;

  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;

  margin-left: 2rem;

  padding: 1.3rem 1.1rem ;

  border-bottom: ${({theme, $isselected}) => $isselected === 'true' ? `.5rem solid ${theme.PURPLE}`  : 'none'};

`
