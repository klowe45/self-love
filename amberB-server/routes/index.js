const router = require("express").Router();

const { signIn, signUp } = require("../controllers/usersController");

const usersRouter = require("../models/userModel");
const servicesRouter = require("../models/ServiceModel");

router.post("/auth/signin", signIn);
router.post("/auth/signup", signUp);

router.use("/users", usersRouter);
router.use("/services", servicesRouter);

module.exports = router;
