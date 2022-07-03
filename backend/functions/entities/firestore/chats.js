const {db, fire} = require("../../connections/firestore-connect");
const groupingMessages = require("../../utils/grouping-messages");
const {formattingChat} = require("../../utils/formating-chats");


/**
 * @param {*} id id of user
 * @param {*} name name of user
 * @param {*} getUsersById function to get UserInformation
 * @return {object} array of chats object
 */
async function getChats(id, name, getUsersById) {
  const snapshot = await db.collection("chats")
      .where("participants", "array-contains", {id, name})
      .orderBy("createdAt", "desc")
      .get();

  const chats = snapshot.docs.map( async (doc) => {
    return formattingChat({...doc.data(), id: doc.id}, id, getUsersById);
  });

  return await Promise.all(chats);
}

/**
 *
 * @param {*} participants array of participants
 * @return {array} array of chats id
 */
async function getChatsByParticipants(participants) {
  const snapshot = await db.collection("chats")
      .where("participants", "==", participants)
      .orderBy("createdAt", "desc")
      .get();
  return snapshot.docs.map((doc) => {
    return doc.id;
  } );
}

/**
 * @param {*} chatId chat id of chat
 * @param {*} page number of page to get
 * @return {object} message object
 */
async function getMessageFromChat(chatId, page) {
  const snapshot = await db.collection("chats")
      .doc(chatId)
      .get();
  snapshot.data().messages.sort((a, b)=> a.time._seconds - b.time._seconds);
  return groupingMessages(snapshot.data().messages.slice(0, page*100));
}

/**
 * @param {*} chatId id of chat
 * @param {*} messageObject message object to register
 */
async function addMessageToChat(chatId, messageObject) {
  messageObject.time = fire.Timestamp.fromDate(new Date());
  await db.collection("chats")
      .doc(chatId)
      .update({
        messages: fire.FieldValue.arrayUnion(messageObject),
      });
  return getMessageFromChat(chatId, 1);
}

/**
 * @param {*} participants array of participants in the chat
 * @param {*} message object of message to register
 * @return {object} array of messages
 */
async function createChat(participants, message) {
  message[0]["time"] = fire.Timestamp.fromDate(new Date());
  const chatId = db.collection("chats").doc().id;
  await db.collection("chats")
      .doc(chatId)
      .set({
        createdAt: fire.Timestamp.fromDate(new Date()),
        participants,
        messages: message,
      });
  return getMessageFromChat(chatId, 1);
}


module.exports = {
  getChats,
  getMessageFromChat,
  getChatsByParticipants,
  addMessageToChat,
  createChat,
};
