import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MessagePanel from "@pages/messagePanel";
import { ContextProvider } from "@context/Context";
import ProviderMock from "../../../__mocks__/redux/providerMock";
import RouterMock from "../../../__mocks__/routes/routeMock";
import { generateManyChats } from "../../../__mocks__/api/fetch-api-mock/chats";
import FetchMock from "../../../__mocks__/api/fetch-api-mock/fetchMock";

describe("MessagePanel", () => {
  let responseMock;
  beforeAll(() => {
    responseMock = [...generateManyChats(5)];
    FetchMock(200, responseMock);
  });

  it("rendering without crashing", async () => {
    render(
      <ContextProvider>
        <ProviderMock>
          <RouterMock>
            <MessagePanel />
          </RouterMock>
        </ProviderMock>
      </ContextProvider>
    );
    await waitFor(() => {
      expect(screen.queryByText(responseMock[0].user.name)).toBeInTheDocument();
    });
  });
});
