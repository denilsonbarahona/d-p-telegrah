import React from "react";
import { render } from "@testing-library/react";
import ConfigPanel from "@pages/configPanel";
import { ContextProvider } from "@context/Context";
import RouterMock from "../../../__mocks__/routes/routeMock";

describe("config-panel container", () => {
  it("rendering without crashing", () => {
    const { getByRole } = render(
      <ContextProvider>
        <RouterMock>
          <ConfigPanel />
        </RouterMock>
      </ContextProvider>
    );
    expect(
      getByRole("heading", {
        level: 2,
        name: /Which theme do you like the most?/i,
      })
    ).toBeInTheDocument();
  });
});
