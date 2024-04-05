const router = require("express").Router();

const baseRoute = require("./base.route");

router.use("/", baseRoute);

module.exports = router;
