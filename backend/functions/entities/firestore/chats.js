const db = require("../../connections/firestore-connect");
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

module.exports = {
  getChats,
};
