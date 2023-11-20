import styled from "styled-components";

import favoriteImg from "../../assets/favoritar.svg";
import favoritedImg from "../../assets/favoritado.png";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

interface favoriteBook {
  $isfavorite: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;

  > main {
    background-color: ${({ theme }) => theme.WHITE};
    border-top-left-radius: 3.2rem;

    padding: 3.2rem 2rem 9rem;
    height: max-content;

    margin-top: 50%;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 90vw;
      align-self: end;
      margin-top: 15rem;

      display: flex;
      flex-direction: column;
      min-height: 60vh;
      height: fit-content;

      p {
        width: 616px;
        margin-left: 32rem;
        margin-top: -6rem;
      }
    }
  }
`;

export const Protection = styled.div`
  position: absolute;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: start;

  width: 100%;
  height: 15.3rem;

  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);

  > button {
    border: none;
    background: none;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const Cover = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 29.6rem;
    height: 43.3rem;

    position: static;
    top: 6rem;
    left: auto;

    z-index: 2;

    display: felx;
    position: absolute;
    margin-top: 2.6rem;

    border-radius: 0.8rem;
  }
`;

export const Title = styled.div`
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

  content: ${({ $isfavorite }) =>
    `url(${$isfavorite === "true" ? favoritedImg : favoriteImg})`};

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`;
