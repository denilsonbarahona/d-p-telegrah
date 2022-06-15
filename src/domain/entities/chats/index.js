import getTimeFormat from "../../utils/time-ago";

var userID = "ldmYi4zkFvyCkQSlWqJ1";

const destructuringChat = (chat) => {
  const { participants } = chat;
  const { messages } = chat;
  messages.sort((a, b) => a.time - b.time);
  const lastMessage = messages[messages.length - 1];
  const {
    time: { _seconds: seconds },
  } = lastMessage;

  return { participants, messages, lastMessage, seconds };
};

const chatItemFormat = (chat) => {
  const { participants, messages, lastMessage, seconds } =
    destructuringChat(chat);
  const time = getTimeFormat(seconds * 1000);
  const user = participants.filter((participant) => participant.id !== userID);
  const notRead = messages.filter((message) => message.read === false).length;
  lastMessage.time = time;

  return {
    id: chat.id,
    user,
    lastMessage,
    notRead, 
  };
};

const formatChats = (chats) => {
  return chats.map((chat) => chatItemFormat(chat));
};

export default {
  formatChats,
};
