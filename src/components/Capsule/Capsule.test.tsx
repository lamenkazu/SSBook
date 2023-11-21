import { render, fireEvent } from "@testing-library/react";

import { Capsule } from ".";

const title = "Category";

describe("Capsule Component", () => {
  it("should render capsule successfully", () => {
    const { container } = render(<Capsule title={title} />);

    expect(container).toBeInTheDocument();
  });

  it("should render capsule with proper title", () => {
    const { getByText } = render(<Capsule title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });

  it("should call the onClick function when capsule is clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Capsule title={title} $onClick={onClickMock} />
    );

    fireEvent.click(getByText(title));

    expect(onClickMock).toHaveBeenCalled();
  });
});
