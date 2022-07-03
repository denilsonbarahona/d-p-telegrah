import API from "@API/fetch-api/chats";
import FetchMock from "../../../../__mocks__/api/fetch-api-mock/fetchMock";
import { generateManyChats,
    generateManyMessage } from "../../../../__mocks__/api/fetch-api-mock/chats";

describe("testing chat endpoint API", ()=> {
    describe("testing success API CALL", ()=>{
        const CHATS = generateManyChats(5);
        beforeAll(()=>{
            FetchMock(200, CHATS);
        });

        it("should return array of chats", async()=>{
            const response = await API.getChats("fakeID","fakeName", "FakeSIGNAL");
            expect(response.failing).toBeFalsy();
            expect(response.data.length).toEqual(CHATS.length);
        });
    });

    describe("testing fail API CALL", ()=>{
        beforeAll(()=>{
            FetchMock(500, {});
        });

        it("should return error", async()=>{
            const response = await API.getChats("fakeID","fakeName", "FakeSIGNAL");
            expect(response.failing).toBeTruthy();
            expect(response.message).toBe("Error getting chats");
        });
    });
});

describe("testing message endpoint API", ()=>{

    describe("testing success API CALL", ()=>{
        const MESSAGE = generateManyMessage(5);
        beforeAll(()=>{
            FetchMock(200, MESSAGE);
        });
    
        it("should return array of messages", async ()=>{
            const response = await API.getMessageFromChat("CHATID", "PAGE", "SIGNAL");
            expect(response.failing).toBeFalsy();
            expect(response.data[0].messages.length).toBe(MESSAGE[0].messages.length);
        });
    });

    describe("testing fail API CALL", ()=>{
        beforeAll(()=>{
            FetchMock(500, {});
        });

        it("should catch error", async()=>{
            const response = await API.getMessageFromChat("CHATID", "PAGE", "SIGNAL");
            expect(response.failing).toBeTruthy();
            expect(response.message).toEqual("Error getting messages");
        });
    });
});

describe("testing add message endpoint API", ()=>{
    describe("testing success API CALL", ()=>{
        const MESSAGES = generateManyMessage(5);
        beforeAll(()=>{
            FetchMock(200, MESSAGES);
        });

        it("should return array of chats", async()=>{
            const response = await API.sendMessage("CHATID", "MESSAGE", "SENDER", "SIGNAL");
            expect(response.failing).toBeFalsy();
            expect(response.data[0].messages.length).toBe(MESSAGES[0].messages.length);
        });
    });

    describe("testing fail API CALL", ()=>{
        beforeAll(()=>{
            FetchMock(500, {});
        });

        it("should catch error", async()=>{
            const response = await API.sendMessage("CHATID", "MESSAGE", "SENDER", "SIGNAL");
            expect(response.status).toEqual(500);
        });
    });
});


describe("testing add create chat endpoint API", ()=>{
    describe("testing success API CALL", ()=>{
        const MESSAGES = generateManyMessage(5);
        beforeAll(()=>{
            FetchMock(200, MESSAGES);
        });

        it("should return array of chats", async()=>{
            const response = await API.createChat("ID", "MESSAGE", "SENDER", "SIGNAL");
            expect(response.failing).toBeFalsy();
            expect(response.data[0].messages.length).toBe(MESSAGES[0].messages.length);
        });
    });

    describe("testing fail API CALL", ()=>{
        beforeAll(()=>{
            FetchMock(500, {});
        });

        it("should catch error", async()=>{
            const response = await API.sendMessage("CHATID", "MESSAGE", "SENDER", "SIGNAL");
            expect(response.status).toEqual(500);
        });
    });
});