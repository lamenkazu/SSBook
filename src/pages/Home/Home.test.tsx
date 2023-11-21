import { render, screen } from "@testing-library/react";
import { Home } from ".";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

import { mocks } from "../../Mocks/AppMocks";

describe("Home Page", () => {
  it("should render <Home/> sucessfully", () => {
    const { container } = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(container.firstChild?.firstChild).toBeInTheDocument();
  });

  it("should render the 'FavBooks' section", () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Livros favoritos")).toBeInTheDocument();
  });

  it("should render the 'FavAuthors' section", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(getByText("Autores favoritos")).toBeInTheDocument();
  });

  it("should render the 'LibTags'&&'LibBooks' sections", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(getByText("Biblioteca")).toBeInTheDocument();
  });
});
