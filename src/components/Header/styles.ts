import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "./../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.WHITE};
  border-bottom-right-radius: 0;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

  grid-area: header;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 91%;

    border-bottom-right-radius: 3.2rem;

    height: fit-content;
    margin-bottom: 0;
    padding-bottom: 0;

    padding-left: 17.2rem;
  }
`;

export const LogoLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 4.4rem;
  width: 7.8rem;
  border: none;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0.6rem 2rem;

  height: min-content;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    border-bottom-right-radius: 3.2rem;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  > img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
  }

  > p {
    font-size: 1.4rem;
    font-weight: 700;
  }

  @media (max-width: calc(${DEVICE_BREAKPOINTS.MD} - 1px)) {
    > p {
      display: none;
    }
  }
`;

export const LabelSrOnly = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;

  padding: 0;
  margin: -1px;
  overflow: hidden;

  white-space: nowrap;
  border-width: 0;
  clip: rect(0, 0, 0, 0);
`;
export const Form = styled.form`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    padding: 0.2rem;
    border: 0.1rem solid ${({ theme }) => theme.GRAY_100};
    border-radius: 0.5rem;

    align-items: center;

    width: 100%;

    margin-inline: 2.4rem;

    > input {
      all: unset;
      width: 100%;
      margin: 0;
      width: 100%;

      padding: 1rem 1.6rem;

      font-size: 1.4rem;
      color: ${({ theme }) => theme.GRAY_300};
      border: 1px solid transparent;
    }

    > button {
      all: unset;
      cursor: pointer;
      padding-right: 0.8rem;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

export const Actions = styled.div`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    gap: 2.4rem;
    align-items: center;
  }
`;

export const Separator = styled.div`
  height: 3rem;

  border: 1px #e4e4e4 solid;

  margin-right: 2.4rem;
`;
