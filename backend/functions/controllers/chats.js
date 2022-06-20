const chatService = require("../services/chatService");
const userService = require("../services/users.js");

const getChat = ({db}) => async (req, res) =>{
  const {params: {id, name}} = req;
  const chats = await chatService(db.chats).getChats(id, name);
  res.status(200).json(chats);
};

const getMessageFromChat =({db}) => async (req, res) =>{
  const {params: {id, page}} = req;
  const messages = await chatService(db.chats).getMessageFromChat(id, page);
  res.status(200).json(messages);
};

const addMessageToChat = ({db}) => async (req, res) =>{
  const payload = JSON.parse(req.body);
  const {chatId, messageObject} = payload;
  const messages = await chatService(db.chats)
      .addMessageToChat(chatId, messageObject);
  res.status(200).json(messages);
};

const createChat = ({db}) => async (req, res) =>{
  const payload = JSON.parse(req.body);
  const {id, sender, messageObject} = payload;
  const {name} = await userService(db.users).getUserById(id);
  const participants = [{id, name}, {id: sender.id, name: sender.name}];
  const messages = await chatService(db.chats)
      .createChat(participants, [messageObject]);
  res.status(200).json(messages);
};

module.exports = {
  getChat,
  getMessageFromChat,
  addMessageToChat,
  createChat,
};
