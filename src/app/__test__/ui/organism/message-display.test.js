import React from "react";
import { render, waitFor } from "@testing-library/react";
import { ContextProvider } from "@context/Context";
import ProviderMock from "@/app/__mocks__/redux/providerMock";
import MessageDisplay from "@organism/messageDisplay";
import { generateManyMessage } from "../../../__mocks__/api/fetch-api-mock/chats";
import FetchMock from "../../../__mocks__/api/fetch-api-mock/fetchMock";


describe("MessageDisplay", () => {
  let responseMock;
  beforeAll(() => {
    responseMock = [...generateManyMessage(8)];
    FetchMock(200, responseMock);
  });


  it("rendering messages", async() => {
    const {queryByText} = render(
      <ContextProvider>
        <ProviderMock>
          <MessageDisplay />
        </ProviderMock>
      </ContextProvider>
    );
    await waitFor(() => {
      expect(queryByText(responseMock[0].messages[0].message)).toBeInTheDocument();
    });
  });
});
