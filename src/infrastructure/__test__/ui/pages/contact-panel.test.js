import React from "react";
import reactDom from "react-dom";
import {screen, render, waitFor, fireEvent } from "@testing-library/react";
import ContactPanel from "@pages/contactPanel";
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
    responseMock = {...generateManyContacts(1)[0]};
    FetchMock(200, [responseMock]);
  });

  afterAll(() => {
    reactDom.createPortal.mockClear();
  });

  it("Rendering and Searching contact", async() => {
    render(
      <ProviderMock>
        <RouterMock>
          <ContactPanel />
        </RouterMock>
      </ProviderMock>
    );

    await waitFor(()=>{
      expect(screen.getByText(responseMock.name)).toBeInTheDocument(); 
    });
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {target: {value: "test"}});

    expect(screen.queryByText(responseMock.name)).not.toBeInTheDocument();
    fireEvent.change(input, {target: {value: responseMock.name}});
    expect(screen.getByText(responseMock.name)).toBeInTheDocument();
  }); 
});
