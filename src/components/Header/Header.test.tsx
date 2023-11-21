import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./";
import { GET_USER_PIC } from "../../@types/graphqlQuerries";

const mockData = {
  userPicture: "path/to/user-pic.jpg",
};

const mocks = [
  {
    request: {
      query: GET_USER_PIC,
    },
    result: {
      data: mockData,
    },
  },
];

describe("Header Component", () => {
  it("should render <Header/> sucessfully", async () => {
    const { container } = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Header />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(container.firstChild?.firstChild).toBeInTheDocument();
  });
  it("should render the images logo and user picture sucessfully", async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Header />
        </MockedProvider>
      </MemoryRouter>
    );

    const logoElement = screen.getByAltText("Logo do SSBook");
    const userPicElement = (await screen.findByAltText(
      "Foto do usuário"
    )) as HTMLImageElement;

    expect(logoElement).toBeInTheDocument();
    expect(userPicElement).toBeInTheDocument();
    expect(userPicElement.src).toContain(mockData.userPicture);
  });

  it("should render the search form", () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Header />
        </MockedProvider>
      </MemoryRouter>
    );

    const searchFormElement = screen.getByLabelText("Busque um livro");
    const searchInput = screen.getByPlaceholderText("Busque um livro");

    expect(searchFormElement).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it("should handle click events on action buttons", () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Header />
        </MockedProvider>
      </MemoryRouter>
    );

    const addButton = screen.getByLabelText("Adicionar");
    const favButton = screen.getByLabelText("Favoritos");

    fireEvent.click(addButton);
    fireEvent.click(favButton);
  });
});
