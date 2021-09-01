const mongoose = require("mongoose");

const schemaObject = {
  // fields
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  response: [
    {
      question_id: { type: String, required: true, ref: "Questions" },
      answer: { type: String, required: true, ref: "Options" },
    },
  ],
  submission_date: { type: Date, required: true, default: Date.now },
};
const schema = new mongoose.Schema(schemaObject);
module.exports = schema;
mongoose.model("Submission", schema);
