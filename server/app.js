const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");

// db Connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Database connection error"));

// Route middleware
const authRoutes = require("./routes/auth");
const fileRoutes = require("./routes/data");
const dataRoutes = require("./routes/data");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", authRoutes);
app.use("/api", fileRoutes);
app.use("/api", dataRoutes);

// Port
const port = process.env.PORT || 8000;

// Running server
const server = app.listen(port, () => {
  console.log("server is running on port " + port);
});
