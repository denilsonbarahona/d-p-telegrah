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
    case "notify": {
      notifyUsers(payload);
      return;
    }
    default: return;
  }
};


module.exports = {
  dispatchActions,
};
