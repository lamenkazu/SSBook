import styled from 'styled-components';

import favoriteImg from '../../assets/favoritar.svg'
import favoritedImg from '../../assets/favoritado.png'


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
`

export const Cover = styled.img`
  width: 100%;
  object-fit: cover;

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

`;

export const Fav = styled.img<favoriteBook>`

    width: 2.4rem;
    height: 2.4rem;

content: ${({ $isfavorite }) => `url(${($isfavorite === 'true' ? favoritedImg : favoriteImg)})`};


`

export const MainCard = styled.main`
    grid-area: card;
    background-color: ${({theme}) => theme.WHITE};
    border-top-left-radius: 3.2rem;

    padding: 3.2rem 2rem 9rem;
    height: max-content;

    margin-top: -70%;

`
