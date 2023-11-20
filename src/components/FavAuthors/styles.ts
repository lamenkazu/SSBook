import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
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
