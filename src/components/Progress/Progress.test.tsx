import { render } from "@testing-library/react";
import { Progress } from ".";
import { defaultTheme } from "../../styles/themes/default";

describe("Progress Component", () => {
  it("should render without errors", () => {
    const { container } = render(<Progress />);
    expect(container).toBeInTheDocument();
  });

  it("should have the correct color style", () => {
    const { container } = render(<Progress />);
    const progressElement = container.firstChild;
    expect(progressElement).toHaveStyle(`color: ${defaultTheme.PURPLE}`);
  });
});
