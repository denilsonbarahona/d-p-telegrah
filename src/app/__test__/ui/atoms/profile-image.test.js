import React from "react";
import { render } from "@testing-library/react";
import Profile from "@atoms/profileImage";

describe("Profile Image", () => {
  let Image;
  beforeAll(() => {
    const { queryByRole } = render(
      <Profile
        name="test"
        src="https://picsum.photos/id/237/200/300"
        className=""
      />
    );
    Image = queryByRole("img");
  });
  it("should render image", () => {
    expect(Image).toBeInTheDocument();
  });
  it("should render image with correct src", () => {
    expect(Image).toHaveAttribute(
      "src",
      "https://picsum.photos/id/237/200/300"
    );
  });
  it("should render image with correct alt", () => {
    expect(Image).toHaveAttribute("alt", "test");
  });
});
