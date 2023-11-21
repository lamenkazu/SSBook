import { render, screen } from "@testing-library/react";
import { Title } from "./";

describe("Title Component", () => {
  it("should render the title and author name", () => {
    const testName = "Sample Book";
    const testAuthorName = "John Doe";

    render(<Title name={testName} authorName={testAuthorName} />);

    const titleElement = screen.getByText(testName);
    const authorElement = screen.getByText(testAuthorName);

    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
  });

  //TODO deveria verificar qual é a imagem renderizada se for true
  it("should render the favorite icon when isFavorite is true", () => {
    render(
      <Title name="Sample Book" authorName="John Doe" isFavorite={true} />
    );

    const favIconElement = screen.getByAltText("Icone de Favorito");

    expect(favIconElement).toBeInTheDocument();
  });

  //TODO deveria verificar qual é a imagem renderizada se for false
  it("should render the favorite icon when isFavorite is false", () => {
    render(
      <Title name="Sample Book" authorName="John Doe" isFavorite={false} />
    );

    const favIconElement = screen.queryByAltText(
      "Icone de Favorito"
    ) as HTMLImageElement;

    expect(favIconElement).toBeInTheDocument();
  });
});
