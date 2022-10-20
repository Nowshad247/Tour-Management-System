const {
  getTourPackage,
  createtourPackageservice,
  updatedata,
  showByIdModel,
} = require("../services/tourPackage");

exports.createTourPackage = async (req, res, next) => {
  try {
    //save or create
    // const savedata = await createtourPackageservice(req.body);
    console.log(req.body);
    res.status(200).send({
      status: "success",
      message: "data saveed",
      data: "data",
    });
  } catch (error) {
    res.status(400).json({
      message: "Data have some problem ",
      error: error.message,
    });
  }
};
exports.getTourPackage = async (req, res) => {
  try {
    const data = await getTourPackage();
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Faid to face data",
      error: error.message,
    });
  }
};
exports.showById = async (req, res) => {
  const { id } = req.params;
  const result = await showByIdModel(id);
  res.status(200).json({
    data: result,
  });
};
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updatedata(id, req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
