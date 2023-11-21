import styled from "styled-components";

import favoriteImg from "../../../assets/favoritar.svg";
import favoritedImg from "../../../assets/favoritado.png";

import { DEVICE_BREAKPOINTS } from "./../../../styles/deviceBreakpoints";

interface favoriteBook {
  $isFavorite: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 2rem;

  > div {
    display: flex;
    flex-direction: column;

    gap: 0.8rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
    }
    span {
      color: ${({ theme }) => theme.GRAY_300};

      font-size: 1.4rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-bottom: 2.4rem;

    > div {
      margin-left: 32rem;
      margin-top: -17.5rem;
      min-width: 60vw;
      h2 {
        font-size: 3.4rem;
      }

      span {
        font-size: 2.4rem;
      }
    }
  }
`;

export const Fav = styled.img<favoriteBook>`
  width: 2.4rem;
  height: 2.4rem;

  content: ${({ $isFavorite }) =>
    `url(${$isFavorite ? favoritedImg : favoriteImg})`};

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`;
