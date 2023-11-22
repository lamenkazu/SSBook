import { PropsWithChildren } from "react";
import { Container } from "./styles";

export function MainCard({ children }: Readonly<PropsWithChildren>) {
  return <Container>{children}</Container>;
}
