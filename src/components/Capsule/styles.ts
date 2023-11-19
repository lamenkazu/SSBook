import styled from "styled-components";

interface ContainerProps {
  $isselected?: string;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.GRAY_100};
  width: fit-content;
  padding: 0.6rem 1.6rem;

  background-color: ${({ theme, $isselected }) =>
    $isselected === "true" ? theme.PURPLE : theme.WHITE};
  color: ${({ theme, $isselected }) =>
    $isselected === "true" ? theme.WHITE : theme.GRAY_300};
`;
