import { render, screen, waitFor } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import { mocks } from "../../Mocks/AppMocks";

import { LibBooks } from ".";

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
