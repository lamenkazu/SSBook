import { gql } from "@apollo/client";

interface Author {
  name: string;
}

interface FavoriteAuthor {
  id: number;
  name: string;
  picture: string;
  booksCount: number;
}

export interface Book {
  id: number;
  name: string;
  cover: string;
  category: string;
  author: Author;
}

export interface FavoriteBooksResponse {
  favoriteBooks: Book[];
}

export interface FavAuthorsResponse {
  favoriteAuthors: FavoriteAuthor[];
}

export interface LibAllBooksResponse {
  allBooks: Book[];
}

interface AllBooksCategory {
  category: string;
}

export interface AllBooksCategoryResponse {
  allBooks: AllBooksCategory[];
}

interface BookDetail {
  name: string;
  description: string;
  cover: string;
  isFavorite: boolean;
  author: Author;
}

export interface UserPic {
  userPicture: string;
}

export interface GetBookDataResponse {
  book: BookDetail;
}

export const GET_USER_PIC = gql`
  query UserPic {
    userPicture
  }
`;

export const GET_BOOK_DATA = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      name
      description
      cover
      isFavorite
      author {
        name
      }
    }
  }
`;

//Books Categories
export const BOOK_CATEGORIES = gql`
  query AllBooksCategory {
    allBooks {
      category
    }
  }
`;

//Favorite Books
export const GET_FAV_BOOKS = gql`
  query FavBooks {
    favoriteBooks {
      id
      name
      cover
      author {
        name
      }
    }
  }
`;

//AllBooks
export const GET_LIB_BOOKS = gql`
  query LibAllBooks {
    allBooks {
      id
      name
      cover
      category
      author {
        name
      }
    }
  }
`;

//Favorite authors
export const GET_FAV_AUTHORS = gql`
  query FavAuthors {
    favoriteAuthors {
      id
      name
      picture
      booksCount
    }
  }
`;

export const mapCategoryToLabel = (category: string): string => {
  switch (category) {
    case "TECHNOLOGY":
      return "Tecnologia";
    case "TRAVEL":
      return "Viagem";
    case "HORROR":
      return "Terror";
    case "ADVENTURE":
      return "Aventura";
    case "COMEDY":
      return "Comédia";
    case "ROMANCE":
      return "Romance";
    default:
      return category;
  }
};
