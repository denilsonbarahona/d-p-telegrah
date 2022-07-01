const {Server} = require("ws");
const {dispatchActions} = require("./socketDispatch");

const socketConfig=(server)=>{
  const wss = new Server({server});
  wss.on("connection", (ws)=>{
    ws.on("message", (message)=>{
      const data = JSON.parse(message.toString());
      dispatchActions(data, ws);
    });
  });
};

module.exports = socketConfig;
