const { postUser, postLogUser } = require("../controllers/user.controller");

const router = require("express").Router();

/**
 * Login User
 */
router.post("/", postLogUser);
/**
 * Create User
 */
router.post("/", postUser);

module.exports = router;
