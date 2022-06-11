const usersService = (db) => {
  const getUsers = db.getUsers;
  const getUserById = db.getUserById;
  const createUser = db.createUser;

  return {
    getUsers,
    getUserById,
    createUser,
  };
};

module.exports = usersService;
