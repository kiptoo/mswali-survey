const mongoose = require("mongoose");
const validator = require("validator");

module.exports = async (data, user) => {
  if (!user) throw new Error("Please Login to access this resource!");
  if (!data) throw new [{ key: "", message: "Please provide survey data!" }]();
  let { description, title } = data;

  let errors = [];
  if (!title) {
    errors.push({
      key: "title",
      message: "Please provide your title!",
    });
  }

  console.log("errors", errors);
  if (errors.length) throw errors; // return { status: 400, errors };

  const newSurvey = await mongoose.model("Survey").create({
    title,
    description,
    user: user._id,
  });

  return newSurvey;
};
