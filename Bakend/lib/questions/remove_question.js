"use strict";

const mongoose = require("mongoose");
module.exports = async (_id, survey_id, user) => {
  if (!user) throw new Error("Please Login to access this resource!");
  if (!_id) throw new Error("Please provide question id!");
  if (!survey_id)
    throw new [{ key: "", message: "Please provide survey id!" }]();
  // const savedUser = await mongoose
  //   .model("Survey")
  //   .findByIdAndUpdate(
  //     survey_id,
  //     { $pull: { questions: { _id: _id } } },
  //     { new: true }
  //   );
  const savedUser = await mongoose
    .model("Questions")
    .findByIdAndRemove(_id, { new: true })
    .then(async (doc) => {
      return await mongoose
        .model("Survey")
        .findByIdAndUpdate(
          survey_id,
          { $pull: { questions: _id } },
          { new: true }
        )
        .populate("questions");
    });

  if (!savedUser) throw new Error("The target survey was not found!");
  return savedUser;
};
