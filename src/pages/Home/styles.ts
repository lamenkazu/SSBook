import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

interface ListItemProps {
  $isSelected?: boolean;
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
  cursor: pointer;

  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;

  margin-left: 2rem;

  padding: 1.3rem 1.1rem;

  border-bottom: ${({ theme, $isSelected }) =>
    $isSelected ? `.5rem solid ${theme.PURPLE}` : "none"};
`;
