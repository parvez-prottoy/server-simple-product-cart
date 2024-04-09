const {
  postUserService,
  postLogUserService,
} = require("../services/user.service");

/* 
    try {
    return res.status(201).json({
      success: true,
      message: "Create User.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }

*/
// !Login User
const postLogUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await postLogUserService({ email, password });
    return res.status(200).json({
      success: true,
      message: "Login User.",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
// !Create New User
const postUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const user = await postUserService({ username, email, password, roles });
    await user.save();
    return res.status(201).json({
      success: true,
      message: "Create User.",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { postUser, postLogUser };
