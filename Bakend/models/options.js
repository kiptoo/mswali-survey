const mongoose = require("mongoose");
const config = require("../config");
const schemaObject = {
  value: { type: String, required: true },
};
const schema = new mongoose.Schema(schemaObject);
module.exports = schema;
mongoose.model("Options", schema);
