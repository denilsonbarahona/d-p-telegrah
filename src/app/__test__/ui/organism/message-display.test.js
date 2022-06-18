import React from "react";
import { render } from "@testing-library/react";
import MessageDisplay from "@organism/messageDisplay";

describe("MessageDisplay", () => {
  it("Render without crashing", () => {
    const { container } = render(<MessageDisplay />);
    expect(container).toBeTruthy();
  });
});
