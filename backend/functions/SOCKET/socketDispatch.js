const {addClientToStream, notifyUsers} = require("./socketController");

const dispatchActions=({action, payload}, socket)=>{
  switch (action) {
    case "connection": {
      addClientToStream(payload, socket);
      return;
    }
    case "pre-offer":
    case "answer":
    case "candidate":
    case "notify":
    case "availability":
    case "reject-call":
    case "accept-call":
    case "hang-up": {
      notifyUsers(payload);
      return;
    }
    default: return;
  }
};


module.exports = {
  dispatchActions,
};
