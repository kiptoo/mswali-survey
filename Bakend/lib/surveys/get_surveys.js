"use strict";

const mongoose = require("mongoose");

module.exports = async () => {
  return mongoose
    .model("Survey")
    .find()
    .populate("questions")
    .populate({
      path: "questions",
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: "options" },
    })
    .populate("submissions")
    .populate({
      path: "submissions",
      // Get friends of friends - populate the 'friends' array for every friend

      populate: { path: "response.question_id" },
    })
    .populate({
      path: "submissions",
      // Get friends of friends - populate the 'friends' array for every friend

      populate: { path: "response.answer" },
    });
  // .populate({
  //   path: "questions",
  //   // Get friends of friends - populate the 'friends' array for every friend

  //   populate: { path: "submissions" },
  // })
  // .populate({
  //   path: "submissions.response",
  //   // Get friends of friends - populate the 'friends' array for every friend

  //   populate: { path: "question_id", model: "Questions" },
  // })
  // .populate({
  //   path: "submissions.response",
  //   // Get friends of friends - populate the 'friends' array for every friend

  //   populate: { path: "answer", model: "Options" },
  // });
  // .populate({
  //   path: "submissions",
  //   populate: {
  //     path: "response",
  //     populate: {
  //       path: "question_id",
  //       model: "Question",
  //     },
  //   },
  // });

  // .populate("submissions.$.response.$.answer");

  // .populate({
  //   path: "submissions",
  //   // Get friends of friends - populate the 'friends' array for every friend
  //   populate: { path: "response.$.question_id" },
  // })
  // .populate({
  //   path: "submissions",
  //   // Get friends of friends - populate the 'friends' array for every friend
  //   populate: { path: "response.$.answer" },
  // })
  // .populate("question_id")
  // .populate("answer");
  // .exec(function (err, conversation) {
  //   //do stuff
  //   console.log(
  //     "conversation",
  //     conversation[1].questions[1].submissions[6].response
  //   );
  //   // let response = conversation[1].questions.submissions.response;
  //   // console.log("conversation", response);
  // })
};
