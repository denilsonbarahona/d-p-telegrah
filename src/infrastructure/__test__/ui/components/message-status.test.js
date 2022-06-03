import React from "react";
import MessageStatus from "../../../ui/components/message-status";
import { render } from "@testing-library/react";

describe("describe", () => {
  it("rendering without crashing", () => {
    const { getByText } = render(<MessageStatus time={"today"} />);
    expect(getByText("today")).toBeInTheDocument();
  });

  it("to match snapshot", () => {
    const { container } = render(<MessageStatus time={"today"} />);
    expect(container).toMatchSnapshot();
  });
});
