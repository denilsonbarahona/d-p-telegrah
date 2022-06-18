import React from "react";
import { render } from "@testing-library/react";
import MessageBox from "@molecules/messageBox";

describe("MessageBox", () => {
  it("rendering without crashing", () => {
    const { queryByRole } = render(<MessageBox />);
    const Message = queryByRole("textbox");
    expect(Message).toBeInTheDocument();
  });

  it("to match snapshot", () => {
    const { container } = render(<MessageBox />);
    expect(container).toMatchSnapshot();
  });
});
