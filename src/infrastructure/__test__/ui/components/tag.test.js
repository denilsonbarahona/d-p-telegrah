import React from "react";
import { render } from "@testing-library/react";
import Tag from "../../../ui/components/tag";

describe("tag component", () => {
  it("to match snapshot", () => {
    const { container } = render(<Tag>today</Tag>);
    expect(container).toMatchSnapshot();
  });
});
