import React from "react";
import { render } from "@testing-library/react";
import CallPanel from "@pages/callPanel";
import RouterMock from "../../../__mocks__/routes/routeMock";

describe("call panel container", () => {
  it("rendering without crashing", () => {
    const { getByRole } = render(
      <RouterMock>
        <CallPanel />
      </RouterMock>
    );
    expect(
      getByRole("heading", { level: 2, name: /Recent Calls/i })
    ).toBeInTheDocument();
  });
});
