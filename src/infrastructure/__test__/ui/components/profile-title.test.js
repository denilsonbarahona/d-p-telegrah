import React from "react";
import { render } from "@testing-library/react";
import ProfileTitle from "../../../ui/components/profile-title";

describe("profile title", () => {
  it("to match snapshot", () => {
    const { container } = render(<ProfileTitle>Testing</ProfileTitle>);
    expect(container).toMatchSnapshot();
  });

  it("checking isBlue class name", () => {
    const { getByRole } = render(
      <ProfileTitle className="isBlue">Testing</ProfileTitle>
    );
    expect(getByRole("heading", { level: 2 })).toHaveClass("isBlue");
  });

  it("checking isRed class name", () => {
    const { getByRole } = render(
      <ProfileTitle className="isRed">Testing</ProfileTitle>
    );
    expect(getByRole("heading", { level: 2 })).toHaveClass("isRed");
  });
});
