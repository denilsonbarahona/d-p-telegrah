import React from "react";
import reactDom from "react-dom";
import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import ContactPanel from "@pages/contactPanel";
import { ContextProvider } from "@context/Context";
import ProviderMock from "../../../__mocks__/redux/providerMock";
import RouterMock from "../../../__mocks__/routes/routeMock";
import { generateManyContacts } from "../../../__mocks__/api/fetch-api-mock/contacts/index";
import FetchMock from "../../../__mocks__/api/fetch-api-mock/fetchMock";

describe("contact-panel container", () => {
  let responseMock;

  beforeAll(() => {
    reactDom.createPortal = jest.fn((element) => {
      return element;
    });
    responseMock =  [...generateManyContacts(1)];
    FetchMock(200, responseMock);
  });

  afterAll(() => {
    reactDom.createPortal.mockClear();
  });


  it("Rendering and Searching contact", async () => {
    render(
      <ContextProvider>
        <ProviderMock>
          <RouterMock>
            <ContactPanel />
          </RouterMock>
        </ProviderMock>
      </ContextProvider>
    );

    await waitFor(() => {
      expect(screen.queryByText(responseMock[0].name)).toBeInTheDocument();
    });
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "test" } });

    expect(screen.queryByText(responseMock[0].name)).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: responseMock[0].name } });
    expect(screen.getByText(responseMock[0].name)).toBeInTheDocument();
  });
});
