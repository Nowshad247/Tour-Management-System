const {
  getTourPackage,
  createtourPackageservice,
  updatedata,
  showByIdModel,
  trending,
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
    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query; // "3" "10"
      //50 products
      // each page 10 product
      //page 1--> 1-10
      //page 2--> 2-20
      //page 3--> 21-30     --> page 3  -> skip 1-20  -> 3-1 ->2 *10
      //page 4--> 31-40      ---> page 4 --> 1-30  --> 4-1  -->3*10
      //page 5--> 41-50
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
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
exports.trending = async (req, res) => {
  const toptrending = await trending();
  res.status(200).json({
    getData: toptrending,
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
