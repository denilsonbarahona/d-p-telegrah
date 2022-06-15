import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MessagePanel from "@pages/messagePanel";
import ProviderMock from "../../../__mocks__/redux/providerMock";
import RouterMock from "../../../__mocks__/routes/routeMock";
import { generateManyChats } from "../../../__mocks__/api/fetch-api-mock/chats";
import FetchMock from "../../../__mocks__/api/fetch-api-mock/fetchMock";

describe("MessagePanel", () => {
  let responseMock;
  beforeAll(() => {
    responseMock = [...generateManyChats(1)];
    FetchMock(200, responseMock);
  });

  it("rendering without crashing", async () => {
    render(
      <ProviderMock>
        <RouterMock>
          <MessagePanel />
        </RouterMock>
      </ProviderMock>
    );
    await waitFor(() => {
      expect(screen.getByText(responseMock[0].id)).toBeInTheDocument();
    });
  });
});
