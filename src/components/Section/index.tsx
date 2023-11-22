import { PropsWithChildren } from "react";
import { Container, P } from "./styles";

interface SectionProps extends PropsWithChildren {
  title: string;
  hasMore?: boolean;
}

export function Section({
  title,
  children,
  hasMore = false,
}: Readonly<SectionProps>) {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <P $hasMore={hasMore}>ver todos</P>
      </div>

      {children}
    </Container>
  );
}
