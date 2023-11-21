import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("Footer Component", () => {
  it("should render <Footer/> sucessfully", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  it("should render the logo", () => {
    render(<Footer />);
    const logoElement = screen.getByAltText("Logo SSBook");
    expect(logoElement).toBeInTheDocument();
  });

  it("should render the copyright text", () => {
    render(<Footer />);
    const copyrightElement = screen.getByText(
      "Todos os direitos reservados. Studio Sol Books © 2023"
    );
    expect(copyrightElement).toBeInTheDocument();
  });
});
