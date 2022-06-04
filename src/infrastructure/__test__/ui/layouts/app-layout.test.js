import React from "react";
import { render } from "@testing-library/react";
import AppLayout from "@UI-layouts/app-layout";

describe("AppLayout", () => {
  it("rendering without crashing", () => {
    const { getByText } = render(
      <AppLayout>
        <p>testing</p>
      </AppLayout>
    );
    expect(getByText("testing")).toBeInTheDocument();
  });
});
