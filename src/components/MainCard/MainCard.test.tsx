import { render } from "@testing-library/react";
import { MainCard } from ".";

describe("MainCard Component", () => {
  it("should render MainCard without errors", () => {
    const { container } = render(<MainCard />);
    expect(container).toBeInTheDocument();
  });

  it("should render the children inside MainCard", () => {
    const { getByText } = render(<MainCard>Test Content</MainCard>);
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
