"use strict";

const mongoose = require("mongoose");
module.exports = async (_id) => {
  let profile = await mongoose
    .model("User")
    .findById(_id, {
      hash: 0,
    })
    .lean();
  return profile;
};
