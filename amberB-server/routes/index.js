const router = require("express").Router();
const userRouter = require("./users_routes");

router.use("/users", userRouter);

module.exports = router;
