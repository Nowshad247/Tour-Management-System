const { default: mongoose } = require("mongoose");
const tourPackageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a unique Name"],
      trim: true,
      unique: [true, "name Must be Unique"],
      minLength: [3, "Name Must Be three"],
      maxLenght: [100, "Name is must be max 100"],
    },
    description: {
      type: String,
      maxLength: [150, "max will be only 150"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "price can't be nagative"],
    },
    unite: {
      type: String,
      enam: {
        values: ["One", "Two", "Three", "Five"],
        message: "Undifine unite value",
      },
    },
    statusType: {
      type: String,
      required: true,
      enam: {
        values: ["OnGoing", "OnHoled", "Expired"],
        message: "value status type in not match",
      },
    },
    vigitor: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const TourPackageModel = mongoose.model("TourPackageModel", tourPackageSchema);

module.exports = TourPackageModel;
