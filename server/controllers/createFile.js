const fs = require("fs");
const File = require("../models/file");

exports.createFile = async (req, res) => {
  const filename = req.file.filename;

  if (req.file !== null) {
    fs.readFile(`./public/jsonData/${filename}`, "utf8", (err, data) => {
      if (err) {
        console.log(`Error reading file from disk: ${err}`);
      } else {
        const databases = JSON.parse(data);
        console.log(databases);

        databases.forEach((db) => {
          const file = new File(db);
          file.save();
        });

        return res.json({
          ok: true,
        });
      }
    });
  } else {
    res.status(400).send("ERROR!!! Try Again Later");
  }
};
