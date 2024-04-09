const { postUser } = require("../controllers/user.controller");

const router = require("express").Router();

/**
 * Create User
 */
router.post("/", postUser);

module.exports = router;
