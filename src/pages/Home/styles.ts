import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`

    padding: 3.2rem 0 0;

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Para manter a cor padrão do texto
`;

export const FavBooks = styled.section`
    display: flex;
    gap: 2rem;
    overflow-x: scroll;

    >Link{
        text-decoration: none;
    }


    grid-area: favoriteBooks;
`

export const FavBook = styled.div`

    min-width: 13.6rem;

    
    >img{
        width: 100%;
        height: 19.8rem;
        border-radius: .8rem;
    }

    >h3{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        font-size: 1.6rem;
        font-weight: 700;
        line-height: 1.8rem;
    }
`

export const FavAuthors = styled.div`
    display: flex;
    gap: 2.1rem;
    overflow-x: scroll;

    
`

export const FavAuthor = styled.div`

    display: flex;
    align-items: center;
    gap: 2rem;
    border: 1px solid ${({theme}) => theme.GRAY_100};
    border-radius: .8rem;

    min-width: 24.8rem;



    >img{
        width: 6.3rem;
        height: 6.7rem;
        border-radius: .8rem;
    }
`

export const LibTags = styled.div`
    display: flex;
    gap: .8rem;
    overflow-x: scroll;
    margin-bottom: 2rem;
`

export const LibBooks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const LibBook = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    >img{
        width: 4.8rem;
        height: 7.0rem;
        border-radius: .8rem;
    }

    >h3{
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 1.8rem;
    }

    >span{
        font-size: 1.4rem;
        color: ${({theme}) => theme.GRAY_300}
    }
`
