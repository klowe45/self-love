const router = require("express").Router();
const auth = require("../middleware/auth");

router.post("/signup", auth.signUp);
router.post("/signin", auth.signIn);

module.exports = router;
