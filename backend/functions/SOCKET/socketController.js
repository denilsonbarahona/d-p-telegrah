const clients = new Map();

const addClientToStream=(payload, socket)=>{
  clients.set(payload, socket);
};

const notifyUsers=(payload)=>{
  const socket = clients.get(payload.receiver);
  socket.send(JSON.stringify(payload));
};

module.exports = {
  addClientToStream,
  notifyUsers,
};
