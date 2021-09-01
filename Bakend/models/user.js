const mongoose = require("mongoose");
const securePassword = require("secure-password");

const pwd = securePassword();

const config = require("../config");
const schemaObject = {
  // fields
  email: { type: String, required: true },
  hash: { type: String, required: true },
  surveys: [
    {
      survey_id: { type: String, required: true, ref: "Survey" },
    },
  ],
  register_date: { type: Date, required: true, default: Date.now },
};
const schema = new mongoose.Schema(schemaObject);
schema.index({ email: 1 }, { unique: true });
schema.virtual("password").set(function (value) {
  this.hash = pwd.hashSync(Buffer.from(value));
});

schema.methods.isPassword = function (password) {
  password = Buffer.from(password);

  return pwd.verify(password, Buffer.from(this.hash)).then((result) => {
    switch (result) {
      case securePassword.VALID:
        return true;
      case securePassword.VALID_NEEDS_REHASH:
        return password
          .hash(password)
          .then((hash) => {
            this.hash = hash;
            return this.save();
          })
          .catch((error) => console.log(error))
          .then(() => true);
      default:
        return false;
    }
  });
};
module.exports = schema;
mongoose.model("User", schema);
