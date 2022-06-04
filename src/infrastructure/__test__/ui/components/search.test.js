import React from "react";
import { render } from "@testing-library/react";
import Search from "../../../ui/components/search";

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
