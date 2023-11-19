import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

interface ListItemProps {
  $isselected?: string;
}

export const Container = styled.div`
  grid-area: content;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "favBooks"
    "main"
    "footer";

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto auto;
    grid-template-areas:
      "favBooks favBooks"
      "main main"
      "footer footer";

    > main {
      max-width: 100vw;
      margin-left: 17.2rem;

      grid-area: main;
    }

    > footer {
      grid-area: footer;

      position: relative;
      bottom: 0;
    }
  }

  h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.8rem;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.GRAY_300};
  }
`;

export const Head = styled.div`
  grid-area: favBooks;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    min-width: 20vw;
    margin-left: 17.2rem;

    margin-right: 5%;
  }
`;

export const Tab = styled.div`
  display: flex;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.WHITE};

  margin-bottom: 3rem;

  border-bottom-right-radius: 3.2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    background-color: ${({ theme }) => theme.BACKGROUND};
  }
`;

export const UnorderedList = styled.ul`
  display: flex;
  gap: 2rem;
`;

export const ListItem = styled.li<ListItemProps>`
  list-style-type: none;

  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;

  margin-left: 2rem;

  padding: 1.3rem 1.1rem;

  border-bottom: ${({ theme, $isselected }) =>
    $isselected === "true" ? `.5rem solid ${theme.PURPLE}` : "none"};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Para manter a cor padrão do texto

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 28rem;
  }
`;

export const FavBooks = styled.section`
  grid-area: favBooks;

  margin: 0 auto;

  display: flex;
  gap: 2rem;
  overflow-x: scroll;
  min-width: 70vw;

  > Link {
    text-decoration: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
  }
`;

export const FavBook = styled.div`
  min-width: 13.6rem;

  > img {
    width: 100%;
    height: 19.8rem;
    border-radius: 0.8rem;
  }
`;

export const FavAuthors = styled.div`
  display: flex;
  gap: 2.1rem;
  overflow-x: scroll;

  margin-right: 5%;
`;

export const FavAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  border: 1px solid ${({ theme }) => theme.GRAY_100};
  border-radius: 0.8rem;

  min-width: 24.8rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-right: 1.5rem;
  }

  > img {
    width: 6.3rem;
    height: 6.7rem;
    border-radius: 0.8rem;
  }
`;

export const LibTags = styled.div`
  display: flex;
  gap: 0.8rem;
  overflow-x: scroll;
  margin-bottom: 2rem;
`;

export const LibBooks = styled.div``;

export const LibBookContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3.5rem;
  row-gap: 2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: 1fr;
  }
`;

export const LibBook = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > img {
    width: 4.8rem;
    height: 7rem;
    border-radius: 0.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > img {
      height: 10rem;
      width: 6.8rem;
    }

    > h3 {
      width: 100%;
    }
  }
`;
