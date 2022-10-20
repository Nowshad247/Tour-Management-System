const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use(cors());

const tourRoute = require("./routes/tourPackage.route");

app.get("/", (req, res) => {
  res.send("Router is working");
});
app.use("/api/v1/tour", tourRoute);

app.get("*", (req, res) => {
  res.status(404).send({
    body: "Page Not Found",
  });
});

module.exports = app;
