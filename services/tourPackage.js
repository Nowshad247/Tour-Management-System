const TourPackageModel = require("../models/Tour");
exports.getTourPackage = async (filters, queries) => {
  //price:{$gt:50}
  const data = await TourPackageModel.find(filters)
    .select(queries.fields)
    .sort(queries.sortBy);
  return data;
};
exports.createtourPackageservice = async (data) => {
  const tour = new TourPackageModel(data);
  const savedata = await tour.save();
  return savedata;
};
//show by id
exports.showByIdModel = async (id) => {
  const result = await TourPackageModel.findOne({ _id: id });
  return result;
};
exports.updatedata = async (id, data) => {
  const result = await TourPackageModel.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return result;
};
