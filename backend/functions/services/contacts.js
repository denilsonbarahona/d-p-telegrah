const contactService = (db) => {
  const getContacts = db.getContacts;
  const getContactById = db.getContactById;
  const createContact = db.createContact;

  return {
    getContacts,
    getContactById,
    createContact,
  };
};

module.exports = contactService;
