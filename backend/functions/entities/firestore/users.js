const {db} = require("../../connections/firestore-connect");
const {getChatsByParticipants} = require("./chats");
/**
 *
 * @param {*} email email address
 */
async function getUserByEmail(email) {
  const snapshot = await db
      .collection("users")
      .where("email", "==", email)
      .get();
  return snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))[0];
}
/**
 *
 * @param {*} email email address
 * @return {object} user object
 */
async function getUsers(email) {
  const {contacts, id, name} = await getUserByEmail(email);
  const users = contacts.map(async (item) => {
    const user = await getUserById(item.id);
    const chatId = await getChatsByParticipants([{id: item.id, name: item.name},
      {id, name}]);
    return {...user, ...item, chatId: chatId[0], contacts: []};
  });

  return await Promise.all(users);
}

/**
 *
 * @param {*} id user id
 * @return {object} user object
 */
async function getUserById(id) {
  const snapshot = await db.collection("users").doc(id).get();
  return {...snapshot.data(), id: snapshot.id};
}

/**
 *
 * @param {*} contact user data object
 * @return {object} user object
 */
async function createUser(contact) {
  const userToAdd = await getUserByEmail(contact.email);
  if (userToAdd) {
    const {contacts, id} = await getUserByEmail(contact.owner);
    const newContacts = [...contacts, {id, name: contact.name}];
    db.collection("users").doc(id).update({contacts: newContacts});
    return {...userToAdd, contacts: [], name: contact.name};
  }
  return userToAdd;
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
