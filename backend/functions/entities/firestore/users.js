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
  try {
    const {contacts, id, name} = await getUserByEmail(email);
    const users = contacts.map(async (item) => {
      const user = await getUserById(item.id);
      const chatId =
        await getChatsByParticipants(
            [{id: item.id, name: user.name},
              {id, name},
            ]);
      return {...user, ...item, chatId: chatId[0], contacts: []};
    });
    return await Promise.all(users);
  } catch {
    return await Promise.all([]);
  }
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
    const newContacts = [...contacts, {id: userToAdd.id, name: contact.name}];
    db.collection("users").doc(id).update({contacts: newContacts});
    return {...userToAdd, contacts: [], name: contact.name};
  }
  return userToAdd;
}


/**
 * @param {*} login user data to check sign in or sign up
 * @return {object} user object
 */
async function login(login) {
  const user = await getUserByEmail(login.email);
  if (!user) {
    await db.collection("users")
        .doc()
        .set({
          contacts: [],
          lastSeen: "today",
          ...login,
        });
    return await getUserByEmail(login.email);
  }
  return user;
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  login,
};
