const router = require("express").Router();
const userRouter = require("./users_routes.js");

router.use("/users", userRouter);

module.exports = router;
