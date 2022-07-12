const {getTimeFormat} = require("./time-ago");

const destructuringParticipants =
async ({participants}, userId, getUserById) => {
  const participant = participants.find((item)=>item.id !== userId);
  const {contacts} = await getUserById(userId);
  const {image} = await getUserById(participant.id);
  const myContactName = contacts.find((item)=>item.id !== userId);
  const user = {...participant, image, name: myContactName?.name};
  return user;
};

const destructuringMessage = ({messages}, userId)=>{
  messages.sort((a, b) => a.time - b.time);
  const lastMessage = messages[messages.length - 1];
  const notRead = messages.filter((message) => {
    const {sender: {id: senderId}} = message;
    return message.read === false && senderId !== userId;
  } ).length;
  const {time: {_seconds}} = lastMessage;
  const time = getTimeFormat(_seconds * 1000);
  lastMessage.time = time;

  return {notRead, lastMessage};
};

const formattingChat = async (chat, userId, getUserByID) => {
  const user = await destructuringParticipants(chat, userId, getUserByID);
  const {notRead, lastMessage} = destructuringMessage(chat, userId);
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
