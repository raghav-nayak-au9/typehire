const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  // Validation
  if (!name) return res.status(400).send("Name is required");
  if (!email) return res.status(400).send("Email is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send(
        "Password is required and the length should be minimum 6 characters"
      );
  let userExists = await User.findOne({ email });
  if (userExists) return res.status(400).send("Email is already in use");

  //register the user

  const user = new User(req.body);

  try {
    await user.save();
    console.log("USER CREATED:", user);
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log("USER CREATION FAILED", err);
    res.status(400).send("Error.. Try Again");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).exec();
    if (!user) res.status(400).send("User with the email not found");

    user.comparePassword(password, (err, match) => {
      if (!match || err) {
        return res.status(400).send("Wrong Password");
      }

      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });
  } catch (err) {
    console.log("LOGIN ERROR", err);
    res.status(400).send("Signin Failed");
  }
};
