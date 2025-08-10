const router = require("express").Router();
const { signUp, signIn } = require("../middleware/auth");

//post users//
router.post("/signUp", signUp);
router.post("/signIn", signIn);

module.exports = router;
