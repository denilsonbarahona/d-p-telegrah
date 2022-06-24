// const functions = require("firebase-functions");
const app = require("./API/api");
const socketConfig = require("./SOCKET");
const server = require("http").createServer(app);
server.listen(3000);
socketConfig(server);
exports.app = server;
