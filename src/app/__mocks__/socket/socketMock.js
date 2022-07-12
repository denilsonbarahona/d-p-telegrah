export default (sendMock, addEventMock)=>{
    window.WebSocket = jest.fn().mockImplementation(()=>{
        return {
            send: sendMock,
            addEventListener: addEventMock,
        }
    });

    const socket = new WebSocket("");
    return {
        emit: socket.send,
        ListenMessage: socket.addEventListener,
    }
};