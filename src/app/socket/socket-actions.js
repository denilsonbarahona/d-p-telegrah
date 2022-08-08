const openSocket = (connector, emit) => {
  try {
    const json = {
      action: "connection",
      payload: connector,
    };
    console.log("connected");
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

export const sendPreOffer = (sender, receiver, offer, emit) => {
  try {
    const json = {
      action: "pre-offer",
      payload: { sender, receiver, offer, type: "offer"  },
    };
    emit(JSON.stringify(json));
  } catch (e) {
    console.log(e);
  }
};

export const sendAnswer = (sender, receiver, answer, emit) => {
  try {
    const json = {
      action: "answer",
      payload: { sender, receiver, answer, type: "answer" },
    };
    emit(JSON.stringify(json));
  } catch (e) {
    console.log(e);
  }
};

export const sendCandidate = (sender, receiver, candidate, emit) => {
  try {
    const json = {
      action: "candidate",
      payload: { sender, receiver, candidate, type: "candidate" },
    };
    emit(JSON.stringify(json));
  } catch (e) {
    console.log(e);
  }
};

export default openSocket;
