import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { StyledLink } from ".";

describe("StyledLink Component", () => {
  it("should render <StyledLinks/> sucessfully", () => {
    render(
      <MemoryRouter>
        <StyledLink to="/">Link Text</StyledLink>
      </MemoryRouter>
    );

    expect(screen.getByText("Link Text")).toBeInTheDocument();
  });

  it("should pass properties correctly", () => {
    render(
      <MemoryRouter>
        <StyledLink to="/somelink">Link Text</StyledLink>
      </MemoryRouter>
    );

    expect(screen.getByText("Link Text")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/somelink");
  });
});
