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

  it("rendering without crashing", async () => {
    const container = render(<SideLayout />);
    expect(container).toMatchSnapshot();
  });

  it("rendering content", () => {
    const { getByText } = render(
      <SideLayout>
        <p>testing</p>
      </SideLayout>
    );
    expect(getByText("testing")).toBeInTheDocument();
  });
});
