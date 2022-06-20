const chatService =(db)=> {
  const getChats = db.getChats;
  const getMessageFromChat = db.getMessageFromChat;
  const addMessageToChat = db.addMessageToChat;
  const createChat = db.createChat;

  return {
    getChats,
    getMessageFromChat,
    addMessageToChat,
    createChat,
  };
};

module.exports = chatService;
