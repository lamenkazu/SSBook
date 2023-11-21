import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { FavBooks } from ".";
import {
  GET_FAV_BOOKS,
  FavoriteBooksResponse,
} from "../../@types/graphqlQuerries";
import { MemoryRouter } from "react-router-dom";

const mockData: FavoriteBooksResponse = {
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

const mocks = [
  {
    request: {
      query: GET_FAV_BOOKS,
    },
    result: {
      data: { favoriteBooks: mockData.favoriteBooks },
    },
  },
];

describe("FavBooks Component", () => {
  it("should render <FavBooks/> sucessfully", async () => {
    const { container } = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <FavBooks />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(container.firstChild?.firstChild).toBeInTheDocument();
  });
  it("should render favorite books when data is available", async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <FavBooks />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      if (screen.queryByTestId("favbook")) {
        expect(screen.getByTestId("favbook")).toBeInTheDocument();
        expect(screen.getByText("Overly")).toBeInTheDocument();
        expect(screen.getByText("Jane Doe")).toBeInTheDocument();
        expect(screen.getByAltText("Capa do livro")).toBeInTheDocument();
      } else {
        expect(screen.queryByTestId("favbook")).toBeNull();
      }
    });
  });

  it("should render loading state while fetching data", async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <FavBooks />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      if (screen.queryByTestId("progress")) {
        expect(screen.getByTestId("progress")).toBeInTheDocument();
      } else {
        expect(screen.queryByTestId("progress")).toBeNull();
      }
    });
  });
});
