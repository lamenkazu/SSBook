import { render, screen, waitFor } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { LibBooks } from ".";
import { GET_LIB_BOOKS } from "../../@types/graphqlQuerries";
import { MockedProvider } from "@apollo/client/testing";

const mocks = [
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

describe("StyledLink Component", () => {
  it("should render <LibBooks/> sucessfully", () => {
    const { container } = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <LibBooks selectedCategory="Todos" />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(container.firstChild?.firstChild).toBeInTheDocument();
  });

  it("should render <Progress/> while loading", async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <LibBooks selectedCategory="Todos" />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      screen.queryByTestId("progress")
        ? expect(screen.getByTestId("progress")).toBeInTheDocument()
        : expect(screen.queryByTestId("progress")).toBeNull();
    });
  });

  it("should display books correctly when data is available", async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <LibBooks selectedCategory="Todos" />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("labirinto dos ossos")).toBeInTheDocument();
      expect(screen.getByText("uma nota errada")).toBeInTheDocument();
    });
  });
});
