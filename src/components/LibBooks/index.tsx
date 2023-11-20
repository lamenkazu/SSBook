import { useState } from "react";
import { useQuery, QueryResult } from "@apollo/client";
import {
  GET_LIB_BOOKS,
  LibAllBooksResponse,
  mapCategoryToLabel,
} from "../../pages/Home/queries";

import { Container, LibBookContainer, LibBook } from "./styles";
import { Progress } from "../../components/Progress";
import { StyledLink } from "../StyledLink";

export const LibBooks = () => {
  const {
    loading: allBooksLoading,
    data: allBooks,
  }: QueryResult<LibAllBooksResponse> = useQuery(GET_LIB_BOOKS);

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <Container>
      <LibBookContainer>
        {!allBooksLoading ? (
          allBooks?.allBooks
            .filter((book) => {
              const bookCategoryLabel = mapCategoryToLabel(book.category);
              const selectedCategoryLabel =
                mapCategoryToLabel(selectedCategory);
              return (
                selectedCategory === "Todos" ||
                bookCategoryLabel === selectedCategoryLabel
              );
            })
            .map((book) => (
              <StyledLink to={`/details/${book.id}`} key={book.id}>
                <LibBook>
                  <img src={book.cover} alt="" />
                  <div>
                    <h3> {book.name} </h3>
                    <span>{book.author.name}</span>
                  </div>
                </LibBook>
              </StyledLink>
            ))
        ) : (
          <Progress />
        )}
      </LibBookContainer>
    </Container>
  );
};
