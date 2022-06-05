const contactService = require("../services/contacts.js");

const getContact =
  ({ db }) =>
  async (req, res) => {
    const contacts = await contactService(db.contact).getContacts();
    res.status(200).json(contacts);
  };

const getContactById =
  ({ db }) =>
  async (req, res) => {
    const {
      params: { id },
    } = req;
    const contact = await contactService(db.contact).getContactById(id);
    res.status(200).json(contact);
  };

const createContact =
  ({ db }) =>
  async (req, res) => {
    const contact = await contactService(db.contact).createContact(req.body);
    res.status(200).json(contact);
  };

module.exports = {
  getContact,
  createContact,
  getContactById,
};
