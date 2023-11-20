import {
  Container,
  Avatar,
  Logo,
  Head,
  LabelSrOnly,
  Form,
  Actions,
  Action,
  Separator,
  LogoLink,
} from "./styles";
import logoImg from "../../assets/Logo.svg";
import searchImg from "../../assets/lupa.svg";
import addImg from "../../assets/adicionar.svg";
import heartImg from "../../assets/coração.svg";
// import { useQuery, QueryResult } from "@apollo/client";
// import { GET_USER_PIC, UserPic } from "./queries";

export function Header() {
  // const { data }: QueryResult<UserPic> = useQuery(GET_USER_PIC);

  return (
    <Container>
      <Head>
        <LogoLink to={"/"}>
          <Logo src={logoImg} alt="Logo do SSBook" />
        </LogoLink>

        <Form action="#">
          <LabelSrOnly htmlFor="search">Busque um livro</LabelSrOnly>
          <input id="search" type="search" placeholder="Busque um livro" />
          <button type="submit">
            <img src={searchImg} alt="Icone Lupa" />
          </button>
        </Form>

        <Actions>
          <Action>
            <button id="actionAdd">
              <img src={addImg} alt="" />
              <label htmlFor="actionAdd">Adicionar</label>
            </button>
          </Action>

          <Action>
            <button id="actionFav">
              <img src={heartImg} alt="" />
              <label htmlFor="actionFav">Favoritos</label>
            </button>
          </Action>

          <Separator />
        </Actions>

        <Avatar>
          {/* <img src={data?.userPicture} alt="Foto do usuário" /> */}
          <img src="https://github.com/lamenkazu.png" alt="Foto do usuário" />
          <p>Jucicreide</p>
        </Avatar>
      </Head>
    </Container>
  );
}
