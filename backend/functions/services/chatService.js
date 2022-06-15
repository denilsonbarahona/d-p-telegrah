const chatService =(db)=> {
  const getChats = db.getChats;

  return {
    getChats,
  };
};

module.exports = chatService;
