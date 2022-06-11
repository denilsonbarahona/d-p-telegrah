const db = require("../../connections/firestore-connect");
/**
 *
 * @param {*} email email address
 */
async function getUserByEmail(email) {
  const snapshot = await db
    .collection("users")
    .where("email", "==", email)
    .get();
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0];
}
/**
 *
 * @param {*} email email address
 * @return {object} user object
 */
async function getUsers(email) {
  const { contacts } = await getUserByEmail(email);
  const users = contacts.map(async (item) => {
    const user = await getUserById(item.id);
    return { ...user, ...item, contacts: [] };
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
  return { ...snapshot.data(), id: snapshot.id };
}

/**
 *
 * @param {*} contact user data object
 * @return {object} user object
 */
async function createUser(contact) {
  const userToAdd = await getUserByEmail(contact.email);
  if (userToAdd) {
    const { contacts, id } = await getUserByEmail(contact.owner);
    const newContacts = [...contacts, { id, name: contact.name }];
    db.collection("users").doc(id).update({ contacts: newContacts });
    return { ...userToAdd, contacts: [], name: contact.name };
  }
  return userToAdd;
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
