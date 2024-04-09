const UserModel = require("../models/user.model");
const hashPassword = require("./passwordHash.service");

const findUser = async ({ email }) => {
  return await UserModel.findOne({ email });
};

const postUserService = async ({ username, email, password, roles }) => {
  if (!username || !email || !password) {
    throw Error("Invalid Data.");
  }
  const user = await findUser({ email });
  if (user) {
    throw Error("User already exists.");
  }
  const passHash = await hashPassword({ password });
  const userData = new UserModel({
    username,
    email,
    password: passHash,
    roles: roles === undefined || roles === "" ? "user" : roles,
  });
  return userData;
};
module.exports = { postUserService };
