const mongoose = require("mongoose");
const securePassword = require("secure-password");

const pwd = securePassword();

const config = require("../config");
const schemaObject = {
  // fields
  title: { type: String, required: true },
  description: { type: String },
  user: { type: String, required: true, ref: "User" },
  createdate: { type: Date, required: true, default: Date.now },
  questions: [
    { type: String, required: true, ref: "Questions" },
    // {
    //   type: {
    //     type: String,
    //     enum: Object.values(config.questionTypes),
    //     required: true,
    //   },
    //   name: { type: String, required: true },
    //   title: { type: String, required: true },
    //   options: [{ value: { type: String, required: true } }],
    //   submissions: [
    //     {
    //       submission_id: { type: String, required: true, ref: "Submission" },
    //     },
    //   ],
    // },
  ],
  submissions: [{ type: String, required: true, ref: "Submission" }],
};
const schema = new mongoose.Schema(schemaObject);
module.exports = schema;
mongoose.model("Survey", schema);
