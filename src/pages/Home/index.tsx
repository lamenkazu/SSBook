import {
  Container,
  FavBooks,
  FavAuthors,
  FavAuthor,
  FavBook,
  LibTags,
  LibBooks,
  LibBook,
  StyledLink,
  Tab,
  UnorderedList,
  ListItem,
  Head,
  LibBookContainer,
} from "./styles";

import { useQuery, QueryResult } from "@apollo/client";
import {
  FavAuthorsResponse,
  FavoriteBooksResponse,
  GET_FAV_AUTHORS,
  GET_FAV_BOOKS,
  GET_LIB_BOOKS,
  LibAllBooksResponse,
  mapCategoryToLabel,
} from "./queries";

import { Capsule } from "../../components/Capsule";
import { Section } from "../../components/Section";
import { MainCard } from "../../components/MainCard";
import { Footer } from "../../components/Footer";
import { useState } from "react";

import { Progress } from "../../components/Progress";

export function Home() {
  const {
    loading: favBooksLoading,
    data: favBooks,
  }: QueryResult<FavoriteBooksResponse> = useQuery(GET_FAV_BOOKS);
  const {
    loading: favAuthorsLoading,
    data: favAuthors,
  }: QueryResult<FavAuthorsResponse> = useQuery(GET_FAV_AUTHORS);
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
      <Head>
        <Tab>
          <UnorderedList>
            <ListItem $isSelected>Meus livros</ListItem>
            <ListItem>Emprestados</ListItem>
          </UnorderedList>
        </Tab>

        <Section title="Livros favoritos" hasMore>
          <FavBooks>
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
          </FavBooks>
        </Section>
      </Head>

      <MainCard>
        <Section title="Autores favoritos" hasMore>
          <FavAuthors>
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
              <Progress />
            )}
          </FavAuthors>
        </Section>

        <Section title="Biblioteca">
          <LibTags>
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
          </LibTags>

          <LibBooks>
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
          </LibBooks>
        </Section>
      </MainCard>

      <Footer />
    </Container>
  );
}
