const db = require("../../connections/firestore-connect");

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
  return snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
}

module.exports = {
  getChats,
};
