import { PropsWithChildren } from 'react';
import { Container, P } from './styles'

interface SectionProps extends PropsWithChildren{
    title: string;
    hasMore?: boolean;
}

export function Section({title, children, hasMore = false}: SectionProps) {
  return (
    <Container>

        <div>
          <h2>{title}</h2>
          <P $hasmore={hasMore.toString()}>ver todos</P>
        </div>

        {children}

    </Container>
  )
}
