const UserModel = require("../models/user.model");
const hashPassword = require("./passwordHash.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = require("../../config/config").token.key;

const findUser = async ({ email }) => {
  return await UserModel.findOne({ email });
};

// !Login user service
const postLogUserService = async ({ email, password }) => {
  if (!email || !password) {
    throw Error("Invalid Data.");
  }
  const user = await findUser({ email });
  if (!user) {
    throw Error("User not found.Please create new account.");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error("Password does not match.");
  }
  const payload = {
    ...user,
  };
  return jwt.sign(payload, key, { expiresIn: "5h" });
};
// !Create new user service
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
module.exports = { postUserService, postLogUserService };
