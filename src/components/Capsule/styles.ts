import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  $isselected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.GRAY_100};
  width: fit-content;
  padding: 0.6rem 1.6rem;

  background-color: ${({ theme, $isselected }) =>
    $isselected ? theme.PURPLE : theme.WHITE};
  color: ${({ theme, $isselected }) =>
    $isselected ? theme.WHITE : theme.GRAY_300};

  cursor: pointer;
`;
