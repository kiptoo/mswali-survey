"use strict";

const mongoose = require("mongoose");
const validator = require("validator");
module.exports = async (_id, data, user) => {
  console.log("update question data", data);
  if (!user) throw new Error("Please Login to access this resource!");
  if (!_id) throw new Error("Please provide question id!");
  if (!data) throw new [{ key: "", message: "Please provide survey data!" }]();
  let { value } = data;

  const errors = [];
  let fieldsToUpdate = {};

  if (value) {
    if (validator.isEmpty(value))
      errors.push({
        key: "value",
        message: "Please provide the value!",
      });
    else fieldsToUpdate["value"] = value;
  }

  // const savedUser = await mongoose
  //   .model("Survey")
  //   .findOneAndUpdate(
  //     { _id: survey_id, "questions._id": _id },
  //     { $set: fieldsToUpdate },
  //     { new: true }
  //   );
  const savedUser = await mongoose
    .model("Options")
    .findOneAndUpdate({ _id: _id }, { $set: fieldsToUpdate }, { new: true });
  // .then(async (doc) => {
  //   return await mongoose
  //     .model("Questions")
  //     .findById(question_id)
  //     .populate("options");
  // });

  if (!savedUser) throw new Error("The target survey was not found!");
  return savedUser;
};
