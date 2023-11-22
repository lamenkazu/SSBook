import { useQuery, QueryResult } from "@apollo/client";
import {
  AllBooksCategoryResponse,
  BOOK_CATEGORIES,
  mapCategoryToLabel,
} from "../../../GraphQL";

import { Capsule } from "../../../components/Capsule";
import { Container } from "./styles";
import { Progress } from "../../../components/Progress";

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
    data: allCategories,
  }: QueryResult<AllBooksCategoryResponse> = useQuery(BOOK_CATEGORIES);

  const uniqueCategories = [
    ...new Set(
      allCategories?.allBooks.map((book) => mapCategoryToLabel(book.category))
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
        uniqueCategories.map((category) => (
          <Capsule
            key={category}
            title={category}
            isSelected={selectedCategory === category}
            $onClick={() => setSelectedCategory(category)}
          />
        ))
      ) : (
        <Progress data-testid="progress" />
      )}
    </Container>
  );
};
