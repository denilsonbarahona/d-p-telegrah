import React from "react";
import { render } from "@testing-library/react";
import Contact from "@molecules/contact";

describe("Contact", () => {
  it("render without crashing", () => {
    const { getByText } = render(
      <Contact
        name="tester"
        src="https://picsum.photos/id/237/200/300"
        paragraph="testing"
      />
    );
    expect(getByText("tester")).toBeInTheDocument();
  });

  it("not rendering notifications", () => {
    const { queryByRole } = render(
      <Contact
        name="tester"
        src="https://picsum.photos/id/237/200/300"
        paragraph="testing"
      />
    );
    expect(queryByRole("alert")).not.toBeInTheDocument();
  });

  it("rendering notifications", () => {
    const { getByRole } = render(
      <Contact
        name="tester"
        showStatus
        src="https://picsum.photos/id/237/200/300"
        paragraph="testing"
      />
    );

    expect(getByRole("alert")).toBeInTheDocument();
  });
});
