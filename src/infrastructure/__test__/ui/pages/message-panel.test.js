import React from "react";
import reactDom from "react-dom";
import { render } from "@testing-library/react";
import MessagePanel from "@pages/messagePanel";
import ProviderMock from "../../../__mocks__/redux/providerMock";
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
      <ProviderMock>
        <RouterMock>
          <MessagePanel />
        </RouterMock>
      </ProviderMock>
    );
    expect(getByRole("search")).toBeInTheDocument();
  });
});
