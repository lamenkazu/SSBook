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

  transition: all 250ms ease-in-out;

  &:hover {
    padding: 1rem 0;

    h3 {
      margin-top: 1rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
  }
`;
export const FavBook = styled.div`
  min-width: 13.6rem;
  max-width: min-content;

  transition: all 250ms ease;

  filter: contrast(101%) saturate(100%);

  > img {
    width: 100%;
    max-width: 13.6rem;
    height: 19.8rem;
    border-radius: 0.8rem;

    &:hover {
      transform: scale(1.1) rotate(-1deg);
      filter: hue-rotate(7deg) contrast(101%) saturate(150%);
    }
  }
`;
