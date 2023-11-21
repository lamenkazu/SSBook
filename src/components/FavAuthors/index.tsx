import { useQuery, QueryResult } from "@apollo/client";
import { FavAuthorsResponse, GET_FAV_AUTHORS } from "../../GraphQL";

import { Container, FavAuthor } from "./styles";
import { Progress } from "../../components/Progress";

export function FavAuthors() {
  const {
    loading: favAuthorsLoading,
    data: favAuthors,
  }: QueryResult<FavAuthorsResponse> = useQuery(GET_FAV_AUTHORS);
  return (
    <Container>
      {!favAuthorsLoading ? (
        favAuthors?.favoriteAuthors.map((favAuthor) => (
          <FavAuthor key={favAuthor.id}>
            <img src={favAuthor.picture} alt="" />
            <div>
              <h3> {favAuthor.name} </h3>
              <span> {favAuthor.booksCount} livros </span>
            </div>
          </FavAuthor>
        ))
      ) : (
        <Progress data-testid="progress" />
      )}
    </Container>
  );
}
