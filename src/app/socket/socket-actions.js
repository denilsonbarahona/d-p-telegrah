import socket from "./socket-instance";

const openSocket = (connector) => {
  try{
    const json = {
      action: "connection",
      payload: connector,
    };
    socket.send(JSON.stringify(json));
  } catch (e) {
    console.log(e);
  }
};

export const notifyUser = (sender, receiver) => {
  try {
    const json = {
      action: "notify",
      payload: { sender, receiver },
    };
    socket.send(JSON.stringify(json));
  } catch (e) {
    console.log(e);
  }

};

export default openSocket;
