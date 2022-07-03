import API from "@API/fetch-api/auth";
import FetchMock from "../../../../__mocks__/api/fetch-api-mock/fetchMock";
import LoginFetch from "../../../../__mocks__/api/fetch-api-mock/auth";

describe("testing login endpoint API", ()=>{
    describe("testing success of API CALL", ()=>{
        const LOGGED = LoginFetch();
        beforeAll(()=>{
            FetchMock(200, LOGGED);
        });

        it("should return Logged User", async()=>{
            const response = await API.Login({}, null);
            expect(response.failing).toBeFalsy();
            expect(response.data).toEqual(LOGGED);
        });
    });

    describe("testing fail of API CALL", ()=>{
        beforeAll(()=>{
            FetchMock(400, "");
        });

        it("should return error", async()=>{
            const response = await API.Login({}, null);
            expect(response.failing).toBeTruthy();
            expect(response.message).toEqual("Error the user does not exist");
        });
    });
});