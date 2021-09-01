var name = require("./package.json").name;
require("productionize")(name);
const express = require("express");
const app = express();
const config = require("./config");
const helpers = require("./helpers");

var logic = require("./lib");
const cors = require("cors");
const mongoose = require("mongoose");
var port = config.applicationPort;

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
helpers.setupDb();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const sessionConfig = {
  secret: config.applicationSecret,
  resave: false,
  saveUninitialized: true,
  proxy: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: {
    path: "/",
    secure: true,
    sameSite: "none",
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  },
};

app.use(session(sessionConfig));

app.use(
  cors({
    credentials: true,
    origin: [
      config.applicationDomain,
      "https://mswali-survey.web.app",
      "http://localhost:8100",
      "http://192.168.100.6:8100",
    ],
  })
);

// Create User /Signup user
app.post("/api/backend/signup", async (req, res, next) => {
  let reqdata = req.body;
  console.log("signup reqdata", reqdata);

  let data = await logic.users.signup(reqdata);

  res.send(data);
});
// Get user of id :id
app.get("/api/backend/get_userByid/:id", async (req, res, next) => {
  let reqdata = req.params.id;

  let data = await logic.users.getUsersById(reqdata);

  res.send(data);
});
// Get all user
app.get("/api/backend/users", async (req, res, next) => {
  let data = await logic.users.getUSers();

  res.send(data);
});
// Create Survey

app.post("/api/backend/surveys", async (req, res, next) => {
  //requires Login
  let reqdata = req.body;
  let LoggedInuser = req.session.user;
  if (!LoggedInuser._id) res.status(403).send({ error: "require login" });
  let data = await logic.surveys.newSurvey(reqdata, LoggedInuser);

  res.send(data);
});
//GET all surveys
app.get("/api/surveys", async (req, res, next) => {
  console.log("get surveys");
  let data = await logic.surveys.getSurvey();
  console.log("get surveys", data);
  res.send(data);
});
//GET survey by id
app.get("/api/get_surveyByid/:id", async (req, res, next) => {
  let reqdata = req.params.id;
  let LoggedInuser = req.session.user;
  if (!LoggedInuser._id) res.status(403).send({ error: "require login" });
  let data = await logic.surveys.getSurveysById(reqdata);

  res.send(data);
});
app.get("/api/surveys_byuser/:id", async (req, res, next) => {
  let reqdata = req.params.id;

  let data = await logic.surveys.getSurveysByUser(reqdata);

  res.send(data);
});
//Update  survey by :id
// app.post("/api/survey/:id", async (req, res, next) => {
app.post("/api/survey/add_question", async (req, res, next) => {
  let id = req.params.id;
  let reqdata = req.body;
  console.log("add_question target survey id", id);
  console.log("add_question target id", reqdata);
  let LoggedInuser = req.session.user;
  if (!LoggedInuser._id) res.status(403).send({ error: "require login" });
  // let data = await logic.surveys.updateSurvey(id, reqdata);
  let data = await logic.questions.newQuestion(reqdata, LoggedInuser);

  res.send(data);
});
app.post("/api/survey/remove_question/:id", async (req, res, next) => {
  let id = req.params.id;
  let survey_id = req.body.survey_id;
  let LoggedInuser = req.session.user;
  console.log("survey remove_question id", id);
  if (!LoggedInuser._id) res.status(403).send({ error: "require login" });
  // console.log("update target id", reqdata);
  // console.log("am here");
  // let data = await logic.surveys.updateSurvey(id, reqdata);
  let data = await logic.questions.removeQuestion(id, survey_id, LoggedInuser);

  res.send(data);
});
app.post("/api/survey/update_question/:id", async (req, res, next) => {
  let id = req.params.id;
  let reqdata = req.body;
  console.log("survey update_question id", id);
  let LoggedInuser = req.session.user;
  let data = await logic.questions.updateQuestion(id, reqdata, LoggedInuser);

  res.send(data);
});
app.post("/api/question/add_option", async (req, res, next) => {
  let id = req.params.id;
  let reqdata = req.body;
  console.log("update target id", id);
  console.log("update target id", reqdata);
  let LoggedInuser = req.session.user;
  if (!LoggedInuser._id) res.status(403).send({ error: "require login" });
  // let data = await logic.surveys.updateSurvey(id, reqdata);
  let data = await logic.questions.addOption(reqdata, LoggedInuser);

  res.send(data);
});
app.post("/api/question/update_option", async (req, res, next) => {
  let id = req.params.id;
  let reqdata = req.body;
  console.log("update update_option id", id);
  console.log("update update_option data", reqdata);
  let LoggedInuser = req.session.user;
  if (!LoggedInuser._id) res.status(403).send({ error: "require login" });
  // let data = await logic.surveys.updateSurvey(id, reqdata);
  let data = await logic.questions.updateOption(id, reqdata, LoggedInuser);

  res.send(data);
});
app.post("/api/question/remove_option/:id", async (req, res, next) => {
  let id = req.params.id;
  let reqdata = req.body;
  console.log("survey remove_question id", id);
  let LoggedInuser = req.session.user;
  if (!LoggedInuser._id) res.status(403).send({ error: "require login" });
  // console.log("update target id", reqdata);
  // console.log("am here");
  // let data = await logic.surveys.updateSurvey(id, reqdata);
  let data = await logic.questions.removeOption(id, reqdata, LoggedInuser);

  res.send(data);
});
app.post("/api/survey/:id", async (req, res, next) => {
  let id = req.params.id;
  let reqdata = req.body;
  console.log("update target id", id);
  console.log("update target id", reqdata);
  console.log("am here");
  let data = await logic.surveys.updateSurvey(id, reqdata);

  res.send(data);
});

//submit  survey of :id
app.post("/api/submit_survey/:id", async (req, res, next) => {
  let id = req.params.id;
  let reqdata = req.body;
  console.log("submit_survey data", reqdata);
  let data = await logic.submissions.newSubmission(id, reqdata);

  res.send(data);
});
app.post("/api/backend/login", async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let loggedIn = await logic.users.login(email, password);
  if (!loggedIn.status) res.status(403).send({ error: loggedIn.errors });
  req.session.user = loggedIn.results;

  res.status(200).send(req.session.user);
});
app.post("/api/backend/logout", async (req, res, next) => {
  req.session.destroy((_) => {});
  // sso.logout();

  res.status(200).send(true);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(name, "listening on port", port);
});
