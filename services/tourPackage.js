const TourPackageModel = require("../models/Tour");
exports.getTourPackage = async () => {
  const data = await TourPackageModel.find({});
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
