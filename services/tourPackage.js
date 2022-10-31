const TourPackageModel = require("../models/Tour");
exports.getTourPackage = async (filters, queries) => {
  //price:{$gt:50}
  const data = await TourPackageModel.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
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
exports.IncriseVigitoor = async (id) => {
  const vigitorAdd = await TourPackageModel.updateOne(
    { _id: id },
    { $inc: { vigitor: 1 } },
    { new: true }
  );
  return vigitorAdd;
};
exports.trending = async () => {
  const trendingResult = await TourPackageModel.find({})
    .sort({ vigitor: -1 })
    .limit(3);
  return trendingResult;
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
