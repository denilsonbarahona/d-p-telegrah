import React from "react";
import { render } from "@testing-library/react";
import MessageDisplay from "../../../ui/containers/message-display";

describe("MessageDisplay", () => {
  it("Render without crashing", () => {
    const { container } = render(<MessageDisplay />);
    expect(container).toBeTruthy();
  });
});
