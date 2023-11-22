import { PropsWithChildren } from "react";
import { Container } from "./styles";

interface Props extends PropsWithChildren {
  to: string;
}

export function StyledLink({ children, to }: Readonly<Props>) {
  return <Container to={to}>{children}</Container>;
}
