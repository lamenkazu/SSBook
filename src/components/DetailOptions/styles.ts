import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  gap: 0.5rem;

  width: max-content;
  padding: 0.3rem;

  width: fit-content;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.WHITE};

  cursor: pointer;

  > li {
    display: flex;
    align-items: center;

    gap: 1.6rem;

    /* border-bottom: 1px solid ${({ theme }) => theme.GRAY_100}; */
    width: 100%;

    transition: all 0.2s ease;
    &:hover {
      transform: scale(0.98);
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: absolute;
    width: 29.6rem;
    margin-top: 28rem;
  }
`;
