import { useQuery, QueryResult } from "@apollo/client";
import {
  GET_LIB_BOOKS,
  LibAllBooksResponse,
  mapCategoryToLabel,
} from "../../pages/Home/queries";

import { Capsule } from "../../components/Capsule";
import { Container } from "./styles";
import { Progress } from "../../components/Progress";

interface LibTagsProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const LibTags = ({
  selectedCategory,
  setSelectedCategory,
}: LibTagsProps) => {
  const {
    loading: allBooksLoading,
    data: allBooks,
  }: QueryResult<LibAllBooksResponse> = useQuery(GET_LIB_BOOKS);

  const uniqueCategories = [
    ...new Set(
      allBooks?.allBooks.map((book) => mapCategoryToLabel(book.category))
    ),
  ];

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
