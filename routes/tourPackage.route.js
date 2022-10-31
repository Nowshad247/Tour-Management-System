const express = require("express");
const router = express.Router();
const tourController = require("../controllers/TourPackage.controller");
const vigitor = require("../middelware/vigitor");

router
  .route("/")
  .get(tourController.getTourPackage)
  .post(tourController.createTourPackage);
router.route("/show/:id").get(vigitor, tourController.showById);
router.route("/:id").patch(tourController.update);
module.exports = router;
