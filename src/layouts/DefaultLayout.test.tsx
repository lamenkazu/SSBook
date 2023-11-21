import { render, screen } from "@testing-library/react";
import { DefaultLayout } from "./DefaultLayout";
import { MemoryRouter } from "react-router-dom";

import { MockedProvider } from "@apollo/client/testing";
import { mocks } from "../Mocks/AppMocks";

describe("DefaultLayout Component", () => {
  it("should renders DefaultLayout successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <DefaultLayout />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  //   it("should renders DefaultLayout component", () => {
  //     // Mock para simular window.innerWidth

  //     render(
  //       <MemoryRouter>
  //         <MockedProvider mocks={mocks} addTypename={false}>
  //           <DefaultLayout />
  //         </MockedProvider>
  //       </MemoryRouter>
  //     );

  //     Object.defineProperty(window, "innerWidth", { value: 500 });

  //     const headerMobile = screen.getByTestId("header-mobile");
  //     const headerDesktop = screen.queryByTestId("header-desktop");

  //     expect(headerMobile).toBeInTheDocument();
  //     expect(headerDesktop).toBeNull();
  //   });
});
