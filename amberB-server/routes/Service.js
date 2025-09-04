const router = require("express").Router();
const {
  getServices,
  createService,
} = require("../controllers/servicesController");

router.get("/", getServices);
router.post("/", createService);

module.exports = router;
