const express = require("express");
const router = express.Router();
const tourController = require("../controllers/TourPackage.controller");
router
  .route("/")
  .get(tourController.getTourPackage)
  .post(tourController.createTourPackage);
router.route("/:id").patch(tourController.update);
module.exports = router;
