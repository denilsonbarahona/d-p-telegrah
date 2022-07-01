const usersService = (db) => {
  const getUsers = db.getUsers;
  const getUserById = db.getUserById;
  const createUser = db.createUser;
  const login = db.login;

  return {
    getUsers,
    getUserById,
    createUser,
    login,
  };
};

module.exports = usersService;
