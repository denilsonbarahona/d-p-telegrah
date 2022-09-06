// const functions = require("firebase-functions");
const PORT = process.env.PORT || 3002;
const app = require("./API/api");
const socketConfig = require("./SOCKET");
const server = require("http").createServer(app);
server.listen(PORT);
socketConfig(server);
exports.app = server;
