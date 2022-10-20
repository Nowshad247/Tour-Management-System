const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const color = require("colors");
const app = require("./app");

// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database connection is successful 🛢`.red.bold);
});
//server
const port = process.env.Port || 8000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
