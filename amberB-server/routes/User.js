const router = require("express").Router();
const { requireAuth } = require("../middleware/auth");
const {
  getCurrentUser,
  signIn,
  signUp,
} = require("../controllers/usersController");

//get
router.get("/me", requireAuth, getCurrentUser);

//post
router.post("/signin", signIn);
router.post("/signup", signUp);

module.exports = router;
