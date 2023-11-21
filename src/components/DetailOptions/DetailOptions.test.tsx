import { render, fireEvent } from "@testing-library/react";

import { DetailOptions } from ".";

describe("DetailOptions Component", () => {
  beforeAll(() => {
    // Mock da função window.alert
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("should render <DetailOptions/> sucessfully", () => {
    const { container } = render(<DetailOptions />);
    expect(container).toBeInTheDocument();
  });

  it("should call handleOptionClick when an option is clicked", () => {
    const handleOptionClickMock = jest.fn();
    const { getByAltText } = render(
      <DetailOptions setIsOptionsMenuVisible={handleOptionClickMock} />
    );

    fireEvent.click(getByAltText("Icone coração"));
    expect(handleOptionClickMock).toHaveBeenCalledTimes(1);

    fireEvent.click(getByAltText("Icone compartilhar"));
    expect(handleOptionClickMock).toHaveBeenCalledTimes(2);

    fireEvent.click(getByAltText("Icone salvar"));
    expect(handleOptionClickMock).toHaveBeenCalledTimes(3);
  });

  it("should call setIsOptionsMenuVisible to hide the menu", () => {
    const setIsOptionsMenuVisibleMock = jest.fn();
    const { getByAltText } = render(
      <DetailOptions setIsOptionsMenuVisible={setIsOptionsMenuVisibleMock} />
    );

    fireEvent.click(getByAltText("Icone coração"));
    expect(setIsOptionsMenuVisibleMock).toHaveBeenCalledWith(false);

    fireEvent.click(getByAltText("Icone compartilhar"));
    expect(setIsOptionsMenuVisibleMock).toHaveBeenCalledWith(false);

    fireEvent.click(getByAltText("Icone salvar"));
    expect(setIsOptionsMenuVisibleMock).toHaveBeenCalledWith(false);
  });
});
