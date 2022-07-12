import React from "react";
import { render } from "@testing-library/react";
import SearchContainer from "@molecules/searchContainer";

describe("SearchContainer", () => {
  it("rendering without crashing", () => {
    const { container, queryByText } = render(<SearchContainer><p>test</p></SearchContainer>);
    expect(container).toBeTruthy();
    expect(queryByText("test")).toBeInTheDocument();
  });
});
