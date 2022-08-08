import React from "react";
import { render } from "@testing-library/react";
import MessageBox from "@molecules/messageBox";
import ProviderMock from "../../../__mocks__/redux/providerMock";

describe("MessageBox", () => {
  it("rendering without crashing", () => {
    const { queryByRole } = render(
      <ProviderMock>
        <MessageBox />
      </ProviderMock>);
    const Message = queryByRole("textbox");
    expect(Message).toBeInTheDocument();
  });

  it("to match snapshot", () => {
    const { container } = render(
      <ProviderMock>
        <MessageBox />
      </ProviderMock>);
    expect(container).toMatchSnapshot();
  });
});
