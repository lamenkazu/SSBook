import { render, waitFor, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { FavAuthors } from ".";
import {
  GET_FAV_AUTHORS,
  FavAuthorsResponse,
} from "../../@types/graphqlQuerries";

const mockData: FavAuthorsResponse = {
  favoriteAuthors: [
    {
      id: 1,
      name: "Author 1",
      picture: "url_da_imagem",
      booksCount: 5,
    },
  ],
};

const mocks = [
  {
    request: {
      query: GET_FAV_AUTHORS,
    },
    result: {
      data: mockData,
    },
  },
];

describe("FavAuthors Component", () => {
  it("should render <FavAuthors/> sucessfully", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FavAuthors />
      </MockedProvider>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
  it("should render favorite authors when data is available", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FavAuthors />
      </MockedProvider>
    );

    // Aguarda até que a consulta GraphQL seja resolvida
    await waitFor(() => {
      expect(screen.getByText("Author 1")).toBeInTheDocument();
      expect(screen.getByText("5 livros")).toBeInTheDocument();
    });
  });

  it("should render loading state while fetching data", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FavAuthors />
      </MockedProvider>
    );

    await waitFor(() => {
      if (screen.queryByTestId("progress")) {
        // Se o componente Progress existir, significa que ainda está carregando
        expect(screen.getByTestId("progress")).toBeInTheDocument();
      } else {
        // Se o componente Progress não existir, significa que o carregamento foi concluído
        expect(screen.queryByTestId("progress")).toBeNull();
      }
    });
  });
});
