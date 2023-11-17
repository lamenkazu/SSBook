import { PropsWithChildren } from 'react'
import { Container } from './styles'

export function MainCard({children} : PropsWithChildren) {
  return (
    <Container>
        {children}
    </Container>
  )
}
