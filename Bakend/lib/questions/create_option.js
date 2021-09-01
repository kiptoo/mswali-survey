const mongoose = require("mongoose");
const validator = require("validator");

module.exports = async (data, user) => {
  if (!user) throw new Error("Please Login to access this resource!");
  if (!data) throw new [{ key: "", message: "Please provide option data!" }]();
  let { value, survey_id, question_id } = data;

  let errors = [];
  // if (!survey_id) {
  //   errors.push({
  //     key: "survey_id",
  //     message: "Please provide your survey id!",
  //   });
  // }
  if (!question_id) {
    errors.push({
      key: "question_id",
      message: "Please provide your question id!",
    });
  }

  if (!value) {
    errors.push({
      key: "value",
      message: "Please provide survey value!",
    });
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
  let options = { value };
  // const savedOption = await mongoose
  //   .model("Survey")
  //   .findOneAndUpdate(
  //     { _id: survey_id, "questions._id": question_id },
  //     { $addToSet: { "questions.$.options": options } },
  //     { new: true }
  //   );
  const savedOption = await mongoose
    .model("Options")
    .create(options)
    .then(async (doc) => {
      return await mongoose
        .model("Questions")
        .findByIdAndUpdate(
          question_id,
          { $push: { options: doc._id } },
          { new: true }
        )
        .populate("options");
    });

  if (!savedOption) throw new Error("The target question was not found!");
  return savedOption;
};
