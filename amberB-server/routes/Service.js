const router = require("express").Router();

const upload = require("../config/multer");
const {
  getServices,
  createService,
  getServiceById,
} = require("../controllers/servicesController");

//get request
router.get("/", getServices);
router.get("/:id", getServiceById);

//post request
router.post("/", upload.single("image"), createService);

module.exports = router;
