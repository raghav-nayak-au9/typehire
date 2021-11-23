const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
    },
    email: {
      type: String,
      trim: true,
      required: "Email is required",
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let user = this;
  bcrypt.hash(user.password, 12, function (err, hash) {
    if (err) {
      console.log("Bcrypt hash error: " + err);
      return next(err);
    } else {
      user.password = hash;
      return next();
    }
  });
});

userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      console.log("COMPARE PASSWORD ERROR", err);
      return next(err, false);
    }

    console.log("MATCH PASSWORD", match);
    return next(null, match);
  });
};

module.exports = mongoose.model("User", userSchema);
