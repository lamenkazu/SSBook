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
  AllBooksCategoryResponse,
  BOOK_CATEGORIES,
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

export function Home() {
  const { data: favBooks }: QueryResult<FavoriteBooksResponse> =
    useQuery(GET_FAV_BOOKS);
  const { data: favAuthors }: QueryResult<FavAuthorsResponse> =
    useQuery(GET_FAV_AUTHORS);
  const { data: allBooks }: QueryResult<LibAllBooksResponse> =
    useQuery(GET_LIB_BOOKS);
  const { data: allBooksCategory }: QueryResult<AllBooksCategoryResponse> =
    useQuery(BOOK_CATEGORIES);

  const uniqueCategories = [
    ...new Set(
      allBooksCategory?.allBooks.map((book) =>
        mapCategoryToLabel(book.category)
      )
    ),
  ];

  return (
    <Container>
      <Head>
        <Tab>
          <UnorderedList>
            <ListItem $isselected="true">Meus livros</ListItem>
            <ListItem>Emprestados</ListItem>
          </UnorderedList>
        </Tab>

        <Section title="Livros favoritos" hasMore>
          <FavBooks>
            {favBooks?.favoriteBooks.map((favBook) => (
              <StyledLink to={`/details/${favBook.id}`} key={favBook.id}>
                <FavBook>
                  <img src={favBook.cover} alt="Capa do livro" />
                  <h3> {favBook.name} </h3>
                  <span> {favBook.author.name} </span>
                </FavBook>
              </StyledLink>
            ))}
          </FavBooks>
        </Section>
      </Head>

      <MainCard>
        <Section title="Autores favoritos" hasMore>
          <FavAuthors>
            {favAuthors?.favoriteAuthors.map((favAuthor) => (
              <FavAuthor key={favAuthor.id}>
                <img src={favAuthor.picture} alt="" />
                <div>
                  <h3> {favAuthor.name} </h3>
                  <span> {favAuthor.booksCount} livros </span>
                </div>
              </FavAuthor>
            ))}
          </FavAuthors>
        </Section>

        <Section title="Biblioteca">
          <LibTags>
            <Capsule title="Todos" isSelected />

            {uniqueCategories.map((category, index: number) => (
              <Capsule key={index} title={category} />
            ))}
          </LibTags>

          <LibBooks>
            <LibBookContainer>
              {allBooks?.allBooks.map((book) => (
                <StyledLink to={`/details/${book.id}`} key={book.id}>
                  <LibBook>
                    <img src={book.cover} alt="" />
                    <div>
                      <h3> {book.name} </h3>
                      <span>{book.author.name}</span>
                    </div>
                  </LibBook>
                </StyledLink>
              ))}
            </LibBookContainer>
          </LibBooks>
        </Section>
      </MainCard>

      <Footer />
    </Container>
  );
}
