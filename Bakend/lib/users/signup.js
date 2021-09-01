const mongoose = require("mongoose");
const validator = require("validator");

module.exports = async (data) => {
  if (!data)
    throw new [
      { key: "", message: "Please provide your sign up credentials!" },
    ]();
  let { email, password, name } = data;
  let date = new Date();
  let errors = [];
  if (!email) {
    errors.push({
      key: "email",
      message: "Please provide your email!",
    });
  } else if (!validator.isEmail(email)) {
    errors.push({
      key: "email",
      message: "Please provide a valid email!",
    });
  }
  if (!password) {
    errors.push({
      key: "password",
      message: "Please provide a password!",
    });
  }
  console.log("errors", errors);
  console.log("signup email", email);
  if (errors.length) throw errors; // return { status: 400, errors };
  const user = await mongoose.model("User").findOne({ email: email });

  if (user) {
    errors.push({
      key: "email",
      message:
        "The email you have provided is already associated with an account!",
    });
    if (errors.length) throw errors;
  }
  const newUser = await mongoose.model("User").create({
    email: email,
    password,
  });
  var result = newUser.toObject();
  delete result.hash;
  console.log("newUser", result);
  return result;
};
