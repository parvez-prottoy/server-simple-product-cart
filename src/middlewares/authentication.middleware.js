const jwt = require("jsonwebtoken");
const key = require("../../config/config").token.key;

const UserModel = require("../models/user.model");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, key);
    const user = await UserModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: "Invalid token" });
  }
};
module.exports = authenticate;
