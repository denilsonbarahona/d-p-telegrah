import React from "react";
import { render } from "@testing-library/react";
import SideLayout from "@template/sideLayout";
import reactDom from "react-dom";

describe("SideLayout", () => {
  beforeAll(() => {
    reactDom.createPortal = jest.fn((element) => {
      return element;
    });
  });

  afterAll(() => {
    reactDom.createPortal.mockClear();
  });

  it("rendering without crashing", () => {
    const { getByRole } = render(<SideLayout />);
    expect(
      getByRole("complementary", { name: "side menu" })
    ).toBeInTheDocument();
  });
});
