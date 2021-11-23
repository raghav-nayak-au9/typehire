const File = require("../models/file");

exports.getData = async (req, res) => {
  const data = await File.find();
  res.status(200).json({
    success: true,
    data,
  });
};
