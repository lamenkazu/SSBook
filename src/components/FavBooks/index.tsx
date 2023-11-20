import { useQuery, QueryResult } from "@apollo/client";

import { Container, FavBook } from "./styles";
import { Progress } from "../../components/Progress";

import {
  FavoriteBooksResponse,
  GET_FAV_BOOKS,
} from "../../@types/graphqlQuerries";
import { StyledLink } from "../StyledLink";

export function FavBooks() {
  const {
    loading: favBooksLoading,
    data: favBooks,
  }: QueryResult<FavoriteBooksResponse> = useQuery(GET_FAV_BOOKS);
  return (
    <Container>
      {!favBooksLoading ? (
        favBooks?.favoriteBooks.map((favBook) => (
          <StyledLink to={`/details/${favBook.id}`} key={favBook.id}>
            <FavBook>
              <img src={favBook.cover} alt="Capa do livro" />
              <h3> {favBook.name} </h3>
              <span> {favBook.author.name} </span>
            </FavBook>
          </StyledLink>
        ))
      ) : (
        <Progress />
      )}
    </Container>
  );
}
