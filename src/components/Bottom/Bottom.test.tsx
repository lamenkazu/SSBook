import { render, screen } from "@testing-library/react";
import { Bottom } from ".";

describe("Bottom Component", () => {
  it("should render <Bottom/> ", () => {
    const { container } = render(<Bottom />);
    expect(container).toBeInTheDocument();
  });
  it("should render all navigation items", () => {
    const { container } = render(<Bottom />);
    expect(container).toBeInTheDocument();

    expect(screen.getByAltText("Icone casinha")).toBeInTheDocument();
    expect(screen.getByAltText("Icone adicionar")).toBeInTheDocument();
    expect(screen.getByAltText("Icone Lupa")).toBeInTheDocument();
    expect(screen.getByAltText("Icone coração")).toBeInTheDocument();
  });
});
