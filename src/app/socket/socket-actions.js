import socket from "./socket-instance";

const openSocket = () => {
  const json = {
    action: "connection",
    payload: "ldmYi4zkFvyCkQSlWqJ1",
  };
  socket.send(JSON.stringify(json));
};

export const notifyUser = (sender, receiver) => {
  const json = {
    action: "notify",
    payload: { sender, receiver },
  };
  socket.send(JSON.stringify(json));
};

export default openSocket;
