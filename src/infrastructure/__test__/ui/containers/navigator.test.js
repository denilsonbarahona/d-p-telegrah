import React from "react";
import { render } from "@testing-library/react";
import Navigator from "../../../ui/containers/navigator";
import RouterMock from "../../../__mocks__/routes/routeMock";

describe("Navigator", () => {
  it("rendering without crashing", () => {
    const { queryByRole } = render(
      <RouterMock>
        <Navigator />
      </RouterMock>
    );
    expect(queryByRole("navigation")).toBeInTheDocument();
  });
});
