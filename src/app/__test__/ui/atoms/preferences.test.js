import React from "react";
import Preference from "@atoms/colorPreference";
import { render } from "@testing-library/react";

describe("Preferences", () => {
  it("rendering without crashing", () => {
    const { queryByRole } = render(
      <Preference text="dark" src="https://picsum.photos/id/237/200/300" />
    );
    const button = queryByRole("button", {
      name: "Click to change to dark theme",
    });
    expect(button).toBeInTheDocument();
  });
});
