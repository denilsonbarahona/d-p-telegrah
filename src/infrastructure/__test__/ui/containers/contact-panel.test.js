import React from "react";
import reactDom from "react-dom";
import { render } from "@testing-library/react";
import ContactPanel from "../../../ui/containers/contact-panel";
import RouterMock from "../../../__mocks__/routes/routeMock";

describe("contact-panel container", () => {
  beforeAll(() => {
    reactDom.createPortal = jest.fn((element) => {
      return element;
    });
  });

  afterAll(() => {
    reactDom.createPortal.mockClear();
  });

  it("rendering without crashing", () => {
    const { getByRole } = render(
      <RouterMock>
        <ContactPanel />
      </RouterMock>
    );
    expect(getByRole("search")).toBeInTheDocument();
  });
});
