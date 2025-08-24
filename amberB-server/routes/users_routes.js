const router = require("express").Router();

router.get("/", (_req, res) => res.json({ ok: true, scope: "users index" }));
router.get("/:id", (req, res) => res.json({ userId: req.params.id }));

module.exports = router;
