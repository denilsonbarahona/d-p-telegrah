import React from "react";
import { render } from "@testing-library/react";
import SearchContainer from "@UI-containers/search-container";

describe("SearchContainer", () => {
  it("rendering without crashing", () => {
    const { container } = render(<SearchContainer />);
    expect(container).toBeTruthy();
  });
});
