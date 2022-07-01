const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersController = require("../controllers/users.js");
const chatController = require("../controllers/chats.js");
const db = require("../entities/firestore");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));


app.get("/api/users", usersController.getUsers({db}));
app.get("/api/users/:id", usersController.getUserById({db}));
app.put("/api/users", usersController.createUser({db}));
app.post("/api/users", usersController.login({db}));
app.get("/api/chats/:id/:name", chatController.getChat({db}));
app.post("/api/chats", chatController.createChat({db}));
app.get("/api/messages/:id/:page", chatController.getMessageFromChat({db}));
app.patch("/api/messages", chatController.addMessageToChat({db}));


module.exports = app;
