import React from "react";
import { render } from "@testing-library/react";
import MessageAlert from "@atoms/messageAlert";

describe("MessageAlert", () => {
  it("rendering without crashing", () => {
    const { queryByRole } = render(<MessageAlert counter={8} />);
    const Alter = queryByRole("alert");
    expect(Alter).toBeInTheDocument();
  });

  it("to match snapshot", () => {
    const { container } = render(<MessageAlert counter={8} />);
    expect(container).toMatchSnapshot();
  });
});
