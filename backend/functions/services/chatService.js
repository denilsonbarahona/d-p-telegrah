const chatService =(db)=> {
  const getChats = db.getChats;
  const getMessageFromChat = db.getMessageFromChat;

  return {
    getChats,
    getMessageFromChat,
  };
};

module.exports = chatService;
