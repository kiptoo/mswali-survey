"use strict";

const mongoose = require("mongoose");
module.exports = async (_id) => {
  let profile = await mongoose
    .model("Survey")
    .findById(_id)
    .populate("questions")
    .populate({
      path: "questions",
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: "options" },
    })
    .populate("submissions")
    .populate({
      path: "submissions",
      // Get friends of friends - populate the 'friends' array for every friend

      populate: { path: "response.question_id" },
    })
    .populate({
      path: "submissions",
      // Get friends of friends - populate the 'friends' array for every friend

      populate: { path: "response.answer" },
    })
    .lean();
  return profile;
};
