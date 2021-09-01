const mongoose = require("mongoose");
const validator = require("validator");

module.exports = async (survey_id, data) => {
  if (!survey_id) throw new Error("Please provide survey id !");
  if (!data) throw new [{ key: "", message: "Please provide survey data!" }]();
  let { name, email, phone, response } = data;

  let errors = [];
  if (!name) {
    errors.push({
      key: "name",
      message: "Please provide your name!",
    });
  }
  if (!email) {
    errors.push({
      key: "email",
      message: "Please provide  email!",
    });
  }
  if (!phone) {
    errors.push({
      key: "phone",
      message: "Please provide  phone!",
    });
  }
  if (!response) {
    errors.push({
      key: "phone",
      message: "Please Fill in the survey!",
    });
  } else {
    response.forEach((element) => {
      if (!element.question_id)
        errors.push({
          key: "question_id",
          message: "Please provide  question id!",
        });
      if (!element.answer)
        errors.push({
          key: "answer",
          message: "Please provide  answer!",
        });
    });
  }

  console.log("errors", errors);
  if (errors.length) throw errors; // return { status: 400, errors };

  let updateSurvey = await mongoose
    .model("Submission")
    .create({
      name,
      email,
      phone,
      response,
    })
    .then(async (doc) => {
      let promises = [];

      // response.forEach((element) => {
      //   let updateSurvey = mongoose.model("Questions").findOneAndUpdate(
      //     { _id: element.question_id },
      //     {
      //       $push: { submissions: doc._id },
      //     }
      //   );
      //   promises.push(updateSurvey);
      // });
      // return await Promise.all(promises);
      // response.forEach((element) => {
      let updateSurvey = mongoose.model("Survey").findOneAndUpdate(
        { _id: survey_id },
        {
          $addToSet: { submissions: doc._id },
        }
      );

      // });
      return updateSurvey;
      // return true;
    });

  console.log("results", updateSurvey);
  if (!updateSurvey) throw new Error("The target survey was not found!");

  return true;
};
