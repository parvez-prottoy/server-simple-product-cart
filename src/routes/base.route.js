const { homePage, health } = require("../controllers/base.controller");

const router = require("express").Router();

router.get("/", homePage);
router.get("/health", health);

module.exports = router;
