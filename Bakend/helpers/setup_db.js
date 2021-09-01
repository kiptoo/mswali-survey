"use strict";

const mongoose = require("mongoose");

const config = require("../config");
require("../models/user");
require("../models/survey");
require("../models/questions");
require("../models/options");
require("../models/submissions");

module.exports = async () => {
  mongoose.Promise = global.Promise;
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.connect(config.dbUrl);
  return new Promise((resolve, reject) => {
    mongoose.connection.once("open", () => {
      console.log(`Connected to mongo at ${config.dbUrl}`);
      resolve();
    });
  });
};
