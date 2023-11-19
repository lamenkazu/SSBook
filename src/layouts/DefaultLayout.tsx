import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Container } from "./styles";
import { Bottom } from "../components/Bottom";
import { DEVICE_BREAKPOINTS } from "../styles/deviceBreakpoints";

export function DefaultLayout() {
  const location = useLocation();

  //Esse código deve ser feito aqui e não no Styles, pois varia com a pagina.
  const mobileSize = Number(
    DEVICE_BREAKPOINTS.MD.replace(/\D/g, "") //remove todos os caracteres não numéricos da string, deixando apenas os números.
  );

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileSize || !location.pathname.includes("/details/")
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth >= mobileSize ||
          !location.pathname.includes("/details/")
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileSize, location.pathname, setIsMobile]);

  return (
    <Container>
      {isMobile && <Header />}
      <Outlet />
      <Bottom />
    </Container>
  );
}
