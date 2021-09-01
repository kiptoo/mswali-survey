"use strict";

const mongoose = require("mongoose");
const validator = require("validator");
module.exports = async (_id, data, user) => {
  console.log("update question data", data);
  if (!user) throw new Error("Please Login to access this resource!");
  if (!_id) throw new Error("Please provide question id!");
  if (!data) throw new [{ key: "", message: "Please provide survey data!" }]();
  let { name, title, type, survey_id } = data;
  const errors = [];
  let fieldsToUpdate = {};
  if (title) {
    if (validator.isEmpty(data.title))
      errors.push({
        key: "title",
        message: "Please provide the title!",
      });
    else fieldsToUpdate["title"] = data.title;
  }
  if (name) {
    if (validator.isEmpty(name))
      errors.push({
        key: "name",
        message: "Please provide the title!",
      });
    else fieldsToUpdate["name"] = name;
  }
  if (type) {
    if (validator.isEmpty(type))
      errors.push({
        key: "type",
        message: "Please provide the type!",
      });
    else fieldsToUpdate["type"] = type;
  }
  // const savedUser = await mongoose
  //   .model("Survey")
  //   .findOneAndUpdate(
  //     { _id: survey_id, "questions._id": _id },
  //     { $set: fieldsToUpdate },
  //     { new: true }
  //   );
  const savedUser = await mongoose
    .model("Questions")
    .findOneAndUpdate({ _id: _id }, { $set: fieldsToUpdate }, { new: true });
  // .then(async (doc) => {
  //   return await mongoose
  //     .model("Survey")
  //     .findById(survey_id)
  //     .populate("questions");
  // });

  if (!savedUser) throw new Error("The target survey was not found!");
  return savedUser;
};
