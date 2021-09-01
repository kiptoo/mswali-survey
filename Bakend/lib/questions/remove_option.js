"use strict";

const mongoose = require("mongoose");
module.exports = async (_id, data, user) => {
  if (!user) throw new Error("Please Login to access this resource!");
  if (!data) throw new Error("Please provide option data!");
  let { survey_id, question_id } = data;
  if (!survey_id)
    throw new [{ key: "", message: "Please provide survey id!" }]();
  if (!_id)
    errors.push({
      key: "_id",
      message: "Please provide the option id!",
    });
  if (!question_id)
    errors.push({
      key: "question_id",
      message: "Please provide the question id!",
    });
  if (!survey_id)
    errors.push({
      key: "survey_id",
      message: "Please provide the survey id!",
    });
  // const savedUser = await mongoose.model("Survey").findOneAndUpdate(
  //   {
  //     _id: survey_id,
  //     "questions._id": question_id,
  //     "questions.options._id": _id,
  //   },
  //   { $pull: { "questions.$.options": { _id: _id } } },
  //   { new: true }
  // );
  const savedUser = await mongoose
    .model("Options")
    .findByIdAndRemove(_id, { new: true })
    .then(async (doc) => {
      return await mongoose
        .model("Questions")
        .findByIdAndUpdate(
          question_id,
          { $pull: { options: _id } },
          { new: true }
        )
        .populate("options");
    });

  if (!savedUser) throw new Error("The target survey was not found!");
  return savedUser;
};
