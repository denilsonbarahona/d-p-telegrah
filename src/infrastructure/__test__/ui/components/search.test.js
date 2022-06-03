import React from "react";
import Search from "../../../ui/components/search";
import { render } from "@testing-library/react";

describe("Search", () => {
  it("rendering without crashing", () => {
    const { getByRole, getByPlaceholderText } = render(<Search />);
    const search = getByRole("search");
    const inputText = getByPlaceholderText("Search");
    expect(search).toBeInTheDocument();
    expect(inputText).toBeInTheDocument();
  });

  it("to match snapshot", () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });
});
