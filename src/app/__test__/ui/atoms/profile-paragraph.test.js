import React from "react";
import { render } from "@testing-library/react";
import ProfileParagraph from "@atoms/profileParagraph";

describe("Profile Paragraph", () => {
  it("to match snapshot", () => {
    const { container } = render(
      <ProfileParagraph>this is a test</ProfileParagraph>
    );
    expect(container).toMatchSnapshot();
  });
});
