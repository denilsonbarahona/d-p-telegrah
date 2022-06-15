const chatService = require("../services/chatService");

const getChat = ({db}) => async (req, res) =>{
  const {params: {id, name}} = req;
  const chats = await chatService(db.chats).getChats(id, name);
  res.status(200).json(chats);
};

module.exports = {
  getChat,
};
