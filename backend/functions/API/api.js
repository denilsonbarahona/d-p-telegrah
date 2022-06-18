const express = require("express");
const cors = require("cors");
const usersController = require("../controllers/users.js");
const chatController = require("../controllers/chats.js");
const db = require("../entities/firestore");
const app = express();
app.use(cors());

app.get("/api/users", usersController.getUsers({db}));
app.get("/api/users/:id", usersController.getUserById({db}));
app.post("/api/users", usersController.createUser({db}));

app.get("/api/chats/:id/:name", chatController.getChat({db}));

app.get("/api/messages/:id/:page", chatController.getMessageFromChat({db}));

module.exports = app;
