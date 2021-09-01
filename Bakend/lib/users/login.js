const mongoose = require("mongoose");
module.exports = async (username, password) => {
  const errors = [];
  if (!username) {
    errors.push({
      key: "username",
      message: "Please provide your email or username!",
    });
  }
  if (!password) {
    errors.push({
      key: "password",
      message: "Please provide your password!",
    });
  }
  if (errors.length) return { status: false, errors };
  const user = await mongoose.model("User").findOne({ email: username });
  if (!user)
    throw new [
      {
        key: "",
        message: "Invalid email or password!",
      },
    ]();
  const passwordCorrect = await user.isPassword(password);
  if (!passwordCorrect)
    return {
      status: false,
      errors: [
        {
          key: "",
          message: "Invalid email or password!",
        },
      ],
    };
  var results = user.toObject();
  delete results.hash;
  console.log("user", results);
  return { status: true, results };
};
