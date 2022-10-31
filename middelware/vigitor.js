const { showById } = require("../controllers/TourPackage.controller");
const { IncriseVigitoor } = require("../services/tourPackage");

const vigitor = async (req, res, next) => {
  const { id } = req.params;
  const adddata = await IncriseVigitoor(id);
  console.log(adddata);
  next();
};

module.exports = vigitor;
