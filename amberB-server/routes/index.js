const router = require("express").Router();
const usersRouter = require("../routes/User");
const servicesRouter = require("../routes/Service");

router.use("/auth", usersRouter);
router.use("/services", servicesRouter);

module.exports = router;
