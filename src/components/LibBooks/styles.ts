import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div``;

export const LibBookContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  column-gap: 3.5rem;
  row-gap: 2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: repeat(3, 1fr);
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

  transition: all 250ms ease;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    &:hover {
      transform: scale(1.1);
      filter: hue-rotate(7deg) contrast(101%) saturate(150%);
    }
    > img {
      height: 10rem;
      width: 6.8rem;
    }

    > h3 {
      width: 100%;
    }
  }
`;
