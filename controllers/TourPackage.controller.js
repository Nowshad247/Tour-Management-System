const {
  getTourPackage,
  createtourPackageservice,
  updatedata,
  showByIdModel,
} = require("../services/tourPackage");

exports.createTourPackage = async (req, res, next) => {
  try {
    //save or create
    const savedata = await createtourPackageservice(req.body);
    // console.log(req.body);
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
    const filters = { ...req.query };

    //{price:{$ gt:50}
    //{ price: { gt: '50' } }
    //gt ,lt ,gte ,lte
    let filtersString = JSON.stringify(filters);
    filtersString = filtersString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );

    filtersData = JSON.parse(filtersString);
    const excludeFilds = ["sort", "page", "limit", "fields"];
    excludeFilds.forEach((field) => delete filtersData[field]);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    const data = await getTourPackage(filtersData, queries);

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
