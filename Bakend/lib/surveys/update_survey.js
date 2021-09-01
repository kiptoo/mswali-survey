"use strict";

const mongoose = require("mongoose");

module.exports = async () => {
  return mongoose.model("Survey").find();
};
