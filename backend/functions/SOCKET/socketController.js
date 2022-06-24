const clients = new Map();

const addClientToStream=(payload, socket)=>{
  clients.set(payload, socket);
};

const notifyUsers=(payload)=>{
  // const socket = clients.get(payload.receiver);
  clients.forEach((client)=>{
    client.send(JSON.stringify(payload));
  });
  // socket.send("something");
};

module.exports = {
  addClientToStream,
  notifyUsers,
};
