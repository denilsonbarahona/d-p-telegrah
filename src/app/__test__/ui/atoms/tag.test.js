import React from "react";
import { render } from "@testing-library/react";
import Tag from "@atoms/tag";

describe("tag component", () => {
  it("to match snapshot", () => {
    const { container } = render(<Tag>today</Tag>);
    expect(container).toMatchSnapshot();
  });
});
