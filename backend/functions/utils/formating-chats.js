const {getTimeFormat} = require("./time-ago");

const destructuringParticipants = ({participants}, userId) => {
  const user = participants.find((participant) => participant.id !== userId);
  return user;
};

const destructuringMessage = ({messages})=>{
  messages.sort((a, b) => a.time - b.time);
  const lastMessage = messages[messages.length - 1];
  const notRead = messages.filter((message) => message.read === false).length;
  const {time: {_seconds}} = lastMessage;
  const time = getTimeFormat(_seconds * 1000);
  lastMessage.time = time;

  return {notRead, lastMessage};
};

const formattingChat = (chat, userId) => {
  const user = destructuringParticipants(chat, userId);
  const {notRead, lastMessage} = destructuringMessage(chat);
  return {
    id: chat.id,
    user,
    notRead,
    lastMessage,
  };
};


module.exports = {
  formattingChat,
};
