import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
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
  max-width: min-content;

  > img {
    width: 100%;
    max-width: 13.6rem;
    height: 19.8rem;
    border-radius: 0.8rem;
  }
`;
