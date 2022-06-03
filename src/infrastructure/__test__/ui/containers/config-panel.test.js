import React from "react";
import ConfigPanel from "../../../ui/containers/config-panel";
import { render } from "@testing-library/react";
import RouterMock from "../../../__mocks__/routes/routeMock";

describe("config-panel container", () => {
  it("rendering without crashing", () => {
    const { getByRole } = render(
      <RouterMock>
        <ConfigPanel />
      </RouterMock>
    );
    expect(
      getByRole("heading", {
        level: 2,
        name: /Which theme do you like the most?/i,
      })
    ).toBeInTheDocument();
  });
});
