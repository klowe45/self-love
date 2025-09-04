const router = require("express").Router();
const { requireAuth } = require("../middleware/auth");
const { getCurrentUser } = require("../controllers/usersController");

router.get("/me", requireAuth, getCurrentUser);

module.exports = router;
