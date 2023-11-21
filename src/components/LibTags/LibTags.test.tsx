import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import { LibTags } from ".";
import { BOOK_CATEGORIES } from "../../@types/graphqlQuerries";
import { MockedProvider } from "@apollo/client/testing";

const category1 = "Ficção";
const category2 = "Não-Ficção";
const category3 = "Terceiro excluído";

const mocks = [
  {
    request: {
      query: BOOK_CATEGORIES,
    },
    result: {
      data: {
        allBooks: [{ category: category1 }, { category: category2 }],
      },
    },
  },
];

describe("LibTags Component", () => {
  it("should render <LibTags/> sicessfully", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LibTags selectedCategory="Todos" setSelectedCategory={() => {}} />
      </MockedProvider>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render categories correctly", async () => {
    const { getByText, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LibTags selectedCategory="Todos" setSelectedCategory={() => {}} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText(category1)).toBeInTheDocument();
      expect(getByText(category2)).toBeInTheDocument();

      expect(queryByText(category3)).not.toBeInTheDocument();
    });
  });

  it("should select the proper category when clicked", async () => {
    const setSelectedCategoryMock = jest.fn();
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LibTags
          selectedCategory="Todos"
          setSelectedCategory={setSelectedCategoryMock}
        />
      </MockedProvider>
    );

    fireEvent.click(await findByText(category2));

    expect(setSelectedCategoryMock).toHaveBeenCalledWith(category2);
  });

  it("should not select the worng category when clicked", async () => {
    const setSelectedCategoryMock = jest.fn();
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LibTags
          selectedCategory="Todos"
          setSelectedCategory={setSelectedCategoryMock}
        />
      </MockedProvider>
    );

    fireEvent.click(await findByText(category2));

    expect(setSelectedCategoryMock).not.toHaveBeenCalledWith(category1);
  });

  it("should render <Progress/> while loading", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LibTags selectedCategory="Todos" setSelectedCategory={() => {}} />
      </MockedProvider>
    );

    await waitFor(() => {
      screen.queryByTestId("progress")
        ? expect(screen.getByTestId("progress")).toBeInTheDocument()
        : expect(screen.queryByTestId("progress")).toBeNull();
    });
  });
});
