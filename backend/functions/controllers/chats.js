const chatService = require("../services/chatService");
const userService = require("../services/users.js");

const getChat = ({db}) => async (req, res) =>{
  const {params: {id, name}} = req;
  const {image, contacts} = await userService(db.users).getUserById(id);
  const chats = await chatService(db.chats).getChats(id, image, name, contacts);
  res.status(200).json(chats);
};

const getMessageFromChat =({db}) => async (req, res) =>{
  const {params: {id, page}} = req;
  const messages = await chatService(db.chats).getMessageFromChat(id, page);
  res.status(200).json(messages);
};

const addMessageToChat = ({db}) => async (req, res) =>{
  const payload = req.body;
  const {chatId, messageObject} = payload;
  const messages = await chatService(db.chats)
      .addMessageToChat(chatId, messageObject);
  res.status(200).json(messages);
};

const createChat = ({db}) => async (req, res) =>{
  const payload = req.body;
  const {id, sender, messageObject} = payload;
  const {name, image} = await userService(db.users).getUserById(id);
  const participants = [{id, name, image},
    {id: sender.id, name: sender.name, image: sender.image}];
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
