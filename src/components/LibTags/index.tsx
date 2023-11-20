import { useState } from "react";
import { useQuery, QueryResult } from "@apollo/client";
import {
  GET_LIB_BOOKS,
  LibAllBooksResponse,
  mapCategoryToLabel,
} from "../../pages/Home/queries";

import { Capsule } from "../../components/Capsule";
import { Container } from "./styles";
import { Progress } from "../../components/Progress";

export const LibTags = () => {
  const {
    loading: allBooksLoading,
    data: allBooks,
  }: QueryResult<LibAllBooksResponse> = useQuery(GET_LIB_BOOKS);

  const uniqueCategories = [
    ...new Set(
      allBooks?.allBooks.map((book) => mapCategoryToLabel(book.category))
    ),
  ];

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <Container>
      <Capsule
        title="Todos"
        isSelected={selectedCategory === "Todos"}
        $onClick={() => setSelectedCategory("Todos")}
      />

      {!allBooksLoading ? (
        uniqueCategories.map((category, index: number) => (
          <Capsule
            key={index}
            title={category}
            isSelected={selectedCategory === category}
            $onClick={() => setSelectedCategory(category)}
          />
        ))
      ) : (
        <Progress />
      )}
    </Container>
  );
};
