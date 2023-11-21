import {
  BOOK_CATEGORIES,
  FavAuthorsResponse,
  FavoriteBooksResponse,
  GET_BOOK_DATA,
  GET_FAV_AUTHORS,
  GET_FAV_BOOKS,
  GET_LIB_BOOKS,
  GetBookDataResponse,
} from "../GraphQL";

export const category1 = "Ficção";
export const category2 = "Não-Ficção";
export const category3 = "Terceiro excluído";

const mockDataBookDetail: GetBookDataResponse = {
  book: {
    name: "Labirinto dos Ossos",
    description: "Amy e Dan queimando 2 milhões",
    cover: "bones.png",
    isFavorite: true,
    author: {
      name: "Rick Riordan",
    },
  },
};

const mockDataFavAuthors: FavAuthorsResponse = {
  favoriteAuthors: [
    {
      id: 1,
      name: "Author 1",
      picture: "url_da_imagem",
      booksCount: 5,
    },
  ],
};

const mockDataFavBooks: FavoriteBooksResponse = {
  favoriteBooks: [
    {
      id: 1,
      name: "Overly",
      cover: "pic.png",
      category: "category",
      author: {
        name: "Jane Doe",
      },
    },
  ],
};

export const mocks = [
  {
    request: {
      query: GET_BOOK_DATA,
      variables: { id: "1" },
    },
    result: {
      data: { book: mockDataBookDetail.book },
    },
    delay: 100, // Adicione um atraso simulado (em milissegundos)
  },
  {
    request: {
      query: GET_FAV_BOOKS,
    },
    result: {
      data: { favoriteBooks: mockDataFavBooks.favoriteBooks },
    },
  },
  {
    request: {
      query: GET_FAV_AUTHORS,
    },
    result: {
      data: mockDataFavAuthors,
    },
  },
  {
    request: {
      query: BOOK_CATEGORIES,
    },
    result: {
      data: {
        allBooks: [{ category: category1 }, { category: category2 }],
      },
    },
  },
  {
    request: {
      query: GET_FAV_AUTHORS,
    },
    result: {
      data: { favoriteBooks: mockDataFavBooks.favoriteBooks },
    },
  },
  {
    request: {
      query: GET_LIB_BOOKS,
    },
    result: {
      data: {
        allBooks: [
          {
            id: 1,
            name: "labirinto dos ossos",
            cover: "bones.png",
            category: "Ficção Juvenil",
            author: {
              name: "Rick Riordan",
            },
          },
          {
            id: 2,
            name: "uma nota errada",
            cover: "river.png",
            category: "Ficção Juvenil",
            author: {
              name: "Rick Riordan",
            },
          },
        ],
      },
    },
  },
];
