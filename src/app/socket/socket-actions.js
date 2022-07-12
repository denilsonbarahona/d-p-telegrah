const openSocket = (connector, emit) => {
  try {
    const json = {
      action: "connection",
      payload: connector,
    };
    emit(JSON.stringify(json));
  } catch (e) {
    console.log(e);
  }
};

export const notifyUser = (sender, receiver, emit) => {
  try {
    const json = {
      action: "notify",
      payload: { sender, receiver },
    };
    emit(JSON.stringify(json));
  } catch (e) {
    console.log(e);
  }
};

export default openSocket;
