const express = require("express");
const multer = require("multer");

const router = express.Router();

const { createFile } = require("../controllers/createFile");
const { getData } = require("../controllers/data");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/jsonData");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 10);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post("/createFile", upload.single("fileValue"), createFile);

router.get("/getData", getData);

module.exports = router;
