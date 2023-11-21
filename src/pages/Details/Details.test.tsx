import { render, screen, waitFor } from "@testing-library/react";
import { Details } from ".";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

import { mocks } from "../../Mocks/AppMocks";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Mantém as funcionalidades originais
  useParams: () => ({ id: "1" }), // Mocka o retorno de useParams
}));

describe("Details Page", () => {
  beforeAll(() => {
    // Mock da função window.scrollTo
    jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  });

  it("should render <Details/> successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Details />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(container.firstChild?.firstChild).toBeInTheDocument();
  });

  it("should render book details successfully", async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Details />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByAltText("Capa do livro")).toBeInTheDocument();
      expect(screen.getByText("Labirinto dos Ossos")).toBeInTheDocument();
      expect(screen.getByText("Rick Riordan")).toBeInTheDocument();
      expect(
        screen.getByText("Amy e Dan queimando 2 milhões")
      ).toBeInTheDocument();
    });
  });
});
