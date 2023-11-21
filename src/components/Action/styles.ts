import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 4.8rem;

  > button {
    background: none;
    all: unset;
    gap: 1.2rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    label {
      padding-bottom: 0.3rem;
      cursor: pointer;
    }
  }
`;
