import React from "react";
import Tag from "../../../ui/components/tag";
import { render } from "@testing-library/react";

describe("tag component", () => {
  it("to match snapshot", () => {
    const { container } = render(<Tag>today</Tag>);
    expect(container).toMatchSnapshot();
  });
});
