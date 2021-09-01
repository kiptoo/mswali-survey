"use strict";

const mongoose = require("mongoose");

module.exports = async () => {
  return mongoose.model("User").find(
    {},
    {
      hash: 0,
    }
  );
};
