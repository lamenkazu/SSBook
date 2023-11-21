import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  $isSelected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.GRAY_100};
  width: fit-content;
  padding: 0.6rem 1.6rem;

  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.PURPLE : theme.WHITE};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.WHITE : theme.GRAY_300};

  cursor: pointer;
`;
