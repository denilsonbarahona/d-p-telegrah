import openSocket, {notifyUser}  from "@/app/socket/socket-actions"; 
import SocketMock from "../../__mocks__/socket/socketMock";

describe("socket test", () => {
  
    const sendMock = jest.fn();
    const addEventMock = jest.fn();
    let socket;

  beforeAll(() => {
    socket = SocketMock(sendMock, addEventMock);
  });

  describe("testing send message", () => {
    it("check calling of send function when open connection", () => {
      openSocket("connector", socket.emit);
      expect(sendMock).toBeCalled();
      expect(sendMock).toHaveBeenCalledTimes(1);
    });

    it("checking calling of send function when notifyUser",()=>{
        notifyUser("sender", "receiver", socket.emit);
        expect(sendMock).toBeCalled();
        expect(sendMock).toHaveBeenCalledTimes(1);
    });
  });

});
