import { render, screen } from "@testing-library/react";
import Action from ".";

describe("Action Component", () => {
  it("should render the button with the right props", () => {
    const id = "actionButton";
    const imgSrc = "path/to/image.png";
    const imgAlt = "Action Image";
    const label = "Click me";

    render(<Action id={id} imgSrc={imgSrc} imgAlt={imgAlt} label={label} />);

    const buttonElement = screen.getByRole("button", { name: label });
    const imageElement = screen.getByAltText(imgAlt);
    const labelElement = screen.getByText(label);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("id", id);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", imgSrc);
    expect(imageElement).toHaveAttribute("alt", imgAlt);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute("for", id);
  });
});
