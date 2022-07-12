import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import reactDom from "react-dom";
import ProviderMock from "../../../__mocks__/redux/providerMock";
import { generateManyContacts } from "../../../__mocks__/api/fetch-api-mock/contacts/index";
import { generateManyChats } from "../../../__mocks__/api/fetch-api-mock/chats";
import FetchMock from "../../../__mocks__/api/fetch-api-mock/fetchMock";
import RoutesApp from "../../../ui/routes/route";

describe("Routes", () => {
  let responseMock;
  beforeAll(() => {
    reactDom.createPortal = jest.fn((element) => element);
  });

  afterAll(() => {
    reactDom.createPortal.mockClear();
  });

  describe("testing in index", () => {
    beforeAll(() => {
      responseMock = { ...generateManyContacts(1)[0] };
      FetchMock(200, [responseMock]);
    });

    it("testing rendering index", async () => {
      render(
        <ProviderMock>
          <RoutesApp />
        </ProviderMock>
      );
      // in the / we will be seeing the name of some contacts
      await waitFor(() => {
        expect(screen.queryByText(responseMock.name)).toBeInTheDocument();
        expect(screen.queryByRole("search")).toBeInTheDocument();
      });
    });
  });

  describe("testing the /call route", () => {
    it("testing rendering /call", () => {
      render(
        <ProviderMock>
          <RoutesApp />
        </ProviderMock>
      );
      const link = screen.queryByRole("link", { name: "go to /call" });
      fireEvent.click(link);
      expect(
        screen.queryByRole("heading", { level: 2, name: /Recent Calls/i })
      ).toBeInTheDocument();
      expect(screen.queryByRole("search")).not.toBeInTheDocument();
    });
  });

  describe("testing the /message route", () => {
    let responseMockChats;
    beforeAll(() => {
      responseMockChats = [...generateManyChats(1)];
      FetchMock(200, responseMockChats);
    });

    it("testing rendering /message", async () => {
      render(
        <ProviderMock>
          <RoutesApp />
        </ProviderMock>
      );
      const link = screen.queryByRole("link", { name: "go to /message" });
      fireEvent.click(link);
      expect(screen.queryByRole("search")).toBeInTheDocument();
      expect(
        screen.queryByRole("heading", { level: 2, name: /Recent Calls/i })
      ).not.toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByText(responseMockChats[0].id)).toBeInTheDocument();
      });
    });
  });

  describe("testing the /config route", () => {
    it("rendering /config", async () => {
      render(
        <ProviderMock>
          <RoutesApp />
        </ProviderMock>
      );
      const link = screen.queryByRole("link", { name: "go to /config" });
      fireEvent.click(link);
      expect(
        screen.queryByRole("heading", {
          level: 2,
          name: /Which theme do you like the most?/i,
        })
      ).toBeInTheDocument();
      expect(screen.queryByRole("search")).not.toBeInTheDocument();
    });
  });
});
