import { Container } from "./styles";

import logoImg from "../../assets/logo_white.svg";

export function Footer() {
  return (
    <Container>
      <img src={logoImg} alt="Logo SSBook" />
      <p>Todos os direitos reservados. Studio Sol Books © 2023</p>
    </Container>
  );
}
