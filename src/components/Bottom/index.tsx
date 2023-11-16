import { Container, NavItem, Span } from "./styles";
import homeImg from '../../assets/casinha.svg'
import addImg from '../../assets/adicionar.svg'
import searchImg from '../../assets/lupa.svg'
import favImg from '../../assets/coração.svg'

export function Bottom() {
  return (
    <Container>
        <NavItem>
            <img src={homeImg} alt="Icone casinha" />
            <Span isActive>Início</Span>
        </NavItem>

        <NavItem>
            <img src={addImg} alt="Icone adicionar" />
            <Span>Adicionar</Span>
        </NavItem>

        <NavItem>
            <img src={searchImg} alt="Icone Lupa" />
            <Span>Buscar</Span>
        </NavItem>

        <NavItem>
            <img src={favImg} alt="Icone coração" />
            <Span>Favoritos</Span>
        </NavItem>
    </Container>
  )
}
