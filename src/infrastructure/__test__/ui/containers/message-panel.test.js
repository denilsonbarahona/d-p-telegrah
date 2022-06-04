import React from "react";
import reactDom from "react-dom";
import { render } from "@testing-library/react";
import MessagePanel from "../../../ui/containers/message-panel";
import RouterMock from "../../../__mocks__/routes/routeMock";

describe("MessagePanel", () => {
  beforeAll(() => {
    reactDom.createPortal = jest.fn((element) => element);
  });

  afterAll(() => {
    reactDom.createPortal.mockClear();
  });

  it("rendering without crashing", () => {
    const { getByRole } = render(
      <RouterMock>
        <MessagePanel />
      </RouterMock>
    );
    expect(getByRole("search")).toBeInTheDocument();
  });
});
