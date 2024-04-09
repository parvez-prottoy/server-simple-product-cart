const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (prop) => `Invalid Email: ${prop.value}`,
      },
    },
    password: {
      type: String,
      min: [6, "Password is too short"],
      required: true,
    },
    roles: {
      type: [
        {
          type: String,
          enum: ["user", "admin"],
        },
      ],
      default: ["user"],
    },
  },
  { timestamps: true }
);
const UserModel = new mongoose.model("Users", userSchema);

module.exports = UserModel;
