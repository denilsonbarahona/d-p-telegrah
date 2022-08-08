import React from "react";
import { render } from "@testing-library/react";
import SideLayout from "@template/sideLayout";
import { ContextProvider } from "@context/Context";
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
    const container = render(
      <ContextProvider>
        <SideLayout />
      </ContextProvider>);
    expect(container).toMatchSnapshot();
  });

  it("rendering content", () => {
    const { getByText } = render(
      <ContextProvider>
        <SideLayout>
          <p>testing</p>
        </SideLayout>
      </ContextProvider>);
    expect(getByText("testing")).toBeInTheDocument();
  });
});
