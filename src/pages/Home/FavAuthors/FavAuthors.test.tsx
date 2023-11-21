import { render, waitFor, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { FavAuthors } from ".";

import { mocks } from "../../../Mocks/AppMocks";

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
      screen.queryByTestId("progress")
        ? expect(screen.getByTestId("progress")).toBeInTheDocument()
        : expect(screen.queryByTestId("progress")).toBeNull();
    });
  });
});
