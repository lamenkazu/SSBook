import { useQuery, QueryResult } from "@apollo/client";
import { GET_USER_PIC, UserPic } from "../../@types/graphqlQuerries";

import {
  Container,
  Avatar,
  Logo,
  Head,
  LabelSrOnly,
  Form,
  Actions,
  Separator,
  LogoLink,
} from "./styles";

import logoImg from "../../assets/Logo.svg";
import searchImg from "../../assets/lupa.svg";
import addImg from "../../assets/adicionar.svg";
import heartImg from "../../assets/coração.svg";
import Action from "../Action";

export function Header() {
  const { data }: QueryResult<UserPic> = useQuery(GET_USER_PIC);

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
          <Action
            id="actionAdd"
            imgSrc={addImg}
            imgAlt="Icone Adicionar"
            label="Adicionar"
          />
          <Action
            id="actionFav"
            imgSrc={heartImg}
            imgAlt="Icone Coração"
            label="Favoritos"
          />

          <Separator />
        </Actions>

        <Avatar>
          <img src={data?.userPicture} alt="Foto do usuário" />
          <p>Jucicreide</p>
        </Avatar>
      </Head>
    </Container>
  );
}
