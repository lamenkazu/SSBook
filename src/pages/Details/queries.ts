import {gql} from '@apollo/client'

export const GET_BOOK_DATA = gql`
    query GetBook($id: ID!) {
        book(id: $id) {
            name
            description
            cover
            isFavorite
            author{
			    name
            }
        }
    } 
`

interface Author {
    name: string;
}

interface Book {
    name: string;
    description: string;
    cover: string;
    isFavorite: boolean;
    author: Author;
    
}
  
export interface GetBookDataResponse {
    book: Book 
}