import React from "react";
import { screen, render } from "@testing-library/react";
import Navigator from "@molecules/navigator";
import RouterMock from "../../../__mocks__/routes/routeMock";

describe("Navigator", () => {
  it("rendering without crashing", () => {
      render(
        <RouterMock>
          <Navigator />
        </RouterMock>
      );
    expect(screen.queryByRole("navigation")).toBeInTheDocument();
  });
});
