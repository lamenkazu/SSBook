import { render } from "@testing-library/react";
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
});
