import API from "@API/fetch-api/contacts";
import FetchMock from "../../../../__mocks__/api/fetch-api-mock/fetchMock";
import { generateManyContacts } from "../../../../__mocks__/api/fetch-api-mock/contacts/index";

describe("testing API Contact endpoints", () => {
  describe("testing success of fetching contacts", () => {
    beforeAll(() => {
      FetchMock(200, generateManyContacts(5));
    });

    it("should return contacts", async () => {
      const response = await API.getMyContacts("testing@email.com");
      expect(response.failing).toBeFalsy();
      expect(response.data.length).toBe(5);
    });
  });

  describe("testing failure of fetching contacts", () => {
    beforeAll(() => {
      FetchMock(500, "Error");
    });
    it("should return error", async () => {
      const response = await API.getMyContacts("testing@email.com");
      expect(response.failing).toBeTruthy();
      expect(response.message).toBe("Error getting contacts");
    });
  });

  describe("testing success of creating contact", () => {
    let responseMock;
    beforeAll(() => {
      responseMock = { ...generateManyContacts(1)[0] };
      FetchMock(200, responseMock);
    });
    it("should return contact created", async () => {
      const response = await API.createContact({
        name: "testing Name",
        owner: "owner@gmail.com",
        email: "testing@gmail.com",
      });
      expect(response.failing).toBeFalsy();
      expect(response.status).toBe(200);
      expect(response.data).toEqual(responseMock);
    });
  });

  describe("testing failure of creating contact with status 500", () => {
    beforeAll(() => {
      FetchMock(500, "Error");
    });

    it("should return error", async () => {
      const response = await API.createContact({
        name: "testing Name",
        owner: "owner@gmail.com",
        email: "testing@gmail.com",
      });
      expect(response.status).toBe(500);
      expect(response.data).toBe("Error");
    });
  });

  describe("testing failure of creating contact with status 400", () => {
    beforeAll(() => {
      FetchMock(400, "User not found");
    });

    it("should return error", async () => {
      const response = await API.createContact({
        name: "testing Name",
        owner: "owner@gmail.com",
        email: "testing@gmail.com",
      });
      expect(response.status).toBe(400);
      expect(response.data).toBe("User not found");
    });
  });
});
