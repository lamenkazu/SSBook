import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Container } from "./styles";
import { Bottom } from "../components/Bottom";

export function DefaultLayout() {
  return (
    <Container>
        <Header/>
        <Outlet/>
        <Bottom/>
    </Container>
  )
}

