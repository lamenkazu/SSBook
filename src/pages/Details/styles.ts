import styled from 'styled-components';

import favoriteImg from '../../assets/favoritar.svg'
import favoritedImg from '../../assets/favoritado.png'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


interface favoriteBook{
    $isfavorite: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;    
`;

export const Protection = styled.div`
    position: absolute;
    padding: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: start;

    width: 100%;
    height: 15.3rem;

    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);

    >button{

        border: none;
        background: none;

        img{
            width: 2.4rem;
            height: 2.4rem;
        }
  
    }

    >ul{
        display: flex;
        flex-direction: column;
        list-style-type: none;

        gap: .5rem;

        width: max-content;
        padding: .3rem;

        width: fit-content;

        border-radius: .8rem;
        background-color: ${({theme}) => theme.WHITE};


        li{
            display: flex;
            align-items: center;

            gap: 1.6rem;

            /* border-bottom: 1px solid ${({theme}) => theme.GRAY_100}; */
            width: 100%;

            transition: all .2s ease;
            &:hover{
                transform: scale(0.9);
            }

        }

    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        display: none;
    }
`

export const Cover = styled.img`
  width: 100%;
  object-fit: cover;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        width: 29.6rem;
        height: 43.3rem;

        z-index: 2;
        

        position: absolute;
        margin-top: 2.6rem;

        margin-left: 11rem;

    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        margin-left: 14rem;
        

    }

`;


export const Title = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 2rem;

    >div{

        display: flex;
        flex-direction: column;

        gap: .8rem;

        h2{

            font-size: 2rem;
            font-weight: 700;
        }
        span{
            color: ${({theme}) => theme.GRAY_300};

            font-size: 1.4rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        >div{
            margin-top: -11rem;

            h2{
                font-size: 3.4rem;
            }

            span{
                font-size: 2.4rem;
            }
        }

        
    }

`;

export const Fav = styled.img<favoriteBook>`

    width: 2.4rem;
    height: 2.4rem;

    content: ${({ $isfavorite }) => `url(${($isfavorite === 'true' ? favoritedImg : favoriteImg)})`};

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        display: none;
    }

`

export const MainCard = styled.main`
    grid-area: card;
    background-color: ${({theme}) => theme.WHITE};
    border-top-left-radius: 3.2rem;

    padding: 3.2rem 2rem 9rem;
    height: max-content;

    margin-top: -70%;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        margin-top: 0;

        align-self: end;
        width: 90vw;
        margin-top: 9.6rem;

        padding-left: 33rem;

        p{
            width: 61.6rem;
        }
    }

`
