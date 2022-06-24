const {addClientToStream, notifyUsers} = require("./socketController");

const dispatchActions=({action, payload}, socket)=>{
  switch (action) {
    case "connection": {
      addClientToStream(payload, socket);
      return;
    }
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
