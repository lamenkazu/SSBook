import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled(Link)`
  text-decoration: none;
  color: inherit; // Para manter a cor padrão do texto

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 28rem;
  }
`;
