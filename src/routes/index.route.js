const router = require("express").Router();

const baseRoute = require("./base.route");
const userRoute = require("./user.route");

router.use("/", baseRoute);
router.use("/api/v1/users", userRoute);

module.exports = router;
