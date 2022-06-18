const db = require("../../connections/firestore-connect");
const groupingMessages = require("../../utils/grouping-messages");
const {formattingChat} = require("../../utils/formating-chats");
/**
 * @param {*} id id of user
 * @param {*} name name of user
 * @return {object} array of chats object
 */
async function getChats(id, name) {
  const snapshot = await db.collection("chats")
      .where("participants", "array-contains", {id, name})
      .orderBy("createdAt", "desc")
      .get();
  return snapshot.docs.map((doc) => {
    return formattingChat({...doc.data(), id: doc.id}, id);
  } );
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

module.exports = {
  getChats,
  getMessageFromChat,
  getChatsByParticipants,
};
