const chatService = require("../services/chatService");

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

module.exports = {
  getChat,
  getMessageFromChat,
};
