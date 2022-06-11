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
    beforeAll(() => {
      FetchMock(200, generateManyContacts(1)[0]);
    });
  });
});
