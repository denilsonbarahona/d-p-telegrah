import React from "react";
import { render } from "@testing-library/react";
import SidePanel from "@template/sidePanel";

describe("SidePanel", () => {
  it("rendering without crashing", () => {
    const { getByText } = render(
      <SidePanel>
        <p>testing</p>
      </SidePanel>
    );
    expect(getByText("testing")).toBeInTheDocument();
  });
});