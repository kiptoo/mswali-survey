const mongoose = require("mongoose");
const validator = require("validator");

module.exports = async (data, user) => {
  if (!user) throw new Error("Please Login to access this resource!");

  if (!data) throw new [{ key: "", message: "Please provide survey data!" }]();
  let { name, title, type, survey_id } = data;

  let errors = [];
  if (!survey_id) {
    errors.push({
      key: "survey_id",
      message: "Please provide survey survey id!",
    });
  }
  if (!title) {
    errors.push({
      key: "title",
      message: "Please provide survey title!",
    });
  }
  if (!name) {
    errors.push({
      key: "name",
      message: "Please provide survey name!",
    });
  }
  if (!type) {
    errors.push({
      key: "type",
      message: "Please provide survey type!",
    });
  } else {
  }

  // if (!options) {
  //   errors.push({
  //     key: "options",
  //     message: "Please provide your options!",
  //   });
  // }else{

  // }

  console.log("errors", errors);
  if (errors.length) throw errors; // return { status: 400, errors };
  let question = { title, name, type };
  // const savedUser = await mongoose
  //   .model("Survey")
  //   .findByIdAndUpdate(
  //     survey_id,
  //     { $addToSet: { questions: question } },
  //     { new: true }
  //   );
  const newQuestion = await mongoose
    .model("Questions")
    .create(question)
    .then(async (doc) => {
      let update = await mongoose
        .model("Survey")
        .findByIdAndUpdate(
          survey_id,
          { $push: { questions: doc._id } },
          { new: true }
        )
        .populate("questions");
      if (update._id) return doc;
      return false;
    });

  if (!newQuestion) throw new Error("The target survey was not found!");
  return newQuestion;
};
