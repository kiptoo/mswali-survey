const mongoose = require("mongoose");
const config = require("../config");
const schemaObject = {
  type: {
    type: String,
    enum: Object.values(config.questionTypes),
    required: true,
  },
  name: { type: String, required: true },
  title: { type: String, required: true },
  options: [{ type: String, required: true, ref: "Options" }],
  submissions: [{ type: String, required: true, ref: "Submission" }],
};
const schema = new mongoose.Schema(schemaObject);
module.exports = schema;
mongoose.model("Questions", schema);
