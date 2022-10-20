const {
  getTourPackage,
  createtourPackageservice,
  updatedata,
} = require("../services/tourPackage");

exports.createTourPackage = async (req, res) => {
  try {
    //save or create
    const savedata = await createtourPackageservice(req.body);
    res.status(200).send({
      status: "success",
      message: "data saveed",
      data: savedata,
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
