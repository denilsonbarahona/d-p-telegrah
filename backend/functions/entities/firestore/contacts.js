const { doc } = require("prettier");
const db = require("../../connections/firestore-connect");
/**
 *
 * @param {*} req request parameter
 * @param {*} res response parameter
 */
async function getContacts() {
  const snapshot = await db.collection("contacts").get();
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

/**
 *
 * @param {*} id contact id
 * @return {object} contact object
 */
async function getContactById(id) {
  const snapshot = await db.collection("contacts").doc(id).get();
  return { ...snapshot.data(), id: snapshot.id };
}

/**
 *
 * @param {*} contact contact data object
 * @return {object} contact object
 */
async function createContact(contact) {
  const docRef = await db.collection("contacts").add(contact);
  const brandNewContact = await getContactById(docRef.id);
  return brandNewContact;
}

module.exports = {
  getContacts,
  getContactById,
  createContact,
};
