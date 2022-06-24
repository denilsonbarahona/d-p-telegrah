const userService = require("../services/users.js");

const getUsers =
  ({db}) =>
    async (req, res) => {
      const {
        query: {email},
      } = req;
      const contacts = await userService(db.users).getUsers(email);
      res.status(200).json(contacts);
    };

const getUserById =
  ({db}) =>
    async (req, res) => {
      const {
        params: {id},
      } = req;
      const contact = await userService(db.users).getUserById(id);
      res.status(200).json(contact);
    };

const createUser =
  ({db}) =>
    async (req, res) => {
      const contact = await userService(db.users).createUser(
          req.body,
      );
      if (contact) {
        res.status(200).json(contact);
      } else {
        res.status(404).json({message: "User not found"});
      }
    };

module.exports = {
  getUsers,
  createUser,
  getUserById,
};
