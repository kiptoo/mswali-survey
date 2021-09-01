import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ModalController, IonRouterOutlet } from "@ionic/angular";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl,
} from "@angular/forms";

import { Observable } from "rxjs";
@Component({
  selector: "app-edit-survey",
  templateUrl: "./edit-survey.page.html",
  styleUrls: ["./edit-survey.page.scss"],
})
export class EditSurveyPage implements OnInit {
  public survey: any;
  surveyId: String;
  currentUser: any;
  username: string;
  questionsInit: Boolean = false;
  createdQuestion: any;
  // questionsForm: FormGroup;
  SurveyForm: FormGroup;
  newSurveyForm = {
    title: "",
    description: "",
  };
  dynamicForm = {
    email: "",
    name: "",
    phone: "",
    response: [],
  };
  surveys = [
    {
      _id: 34,
    },
    {
      _id: 35,
    },
    {
      _id: 36,
    },
    {
      _id: 37,
    },
  ];

  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("mswalitoken"));
    let splitname = this.currentUser.email.split("@");
    this.username = splitname[0];
    this.activatedRoute.queryParams.subscribe((params) => {
      this.surveyId = this.activatedRoute.snapshot.params.id;
    });
  }

  ngOnInit() {
    this.SurveyForm = this.fb.group({
      survey_details: this.fb.group({
        _id: "",
        title: "",
        description: "",
      }),
      // questions: this.fb.array([this.questions]),
      questions: this.fb.array([]),
      // options: this.fb.array([]),
    });
    this.dataService.getsurveyById(this.surveyId).subscribe((survey) => {
      // this.surveys = data;
      let subscount = 0;

      this.loadForm(survey);

      this.survey = survey;
    });
  }
  get questions(): FormGroup {
    return this.fb.group({
      _id: "",
      title: "",
      name: "",
      type: "",
      options: this.fb.array([]),
    });
  }
  get options(): FormGroup {
    return this.fb.group({
      _id: "",
      value: "",
    });
  }
  addQuestion() {
    (this.SurveyForm.get("questions") as FormArray).push(this.questions);
  }
  removeQuestion(index: number) {
    (this.SurveyForm.get("questions") as FormArray).removeAt(index);
  }
  addOption(question) {
    question.get("options").push(this.options);
  }
  removeOption(question, index: number) {
    question.get("options").removeAt(index);
  }
  loadForm(data) {
    //create lines array first

    (<FormGroup>this.SurveyForm.controls["survey_details"]).controls[
      "_id"
    ].patchValue(data._id);
    (<FormGroup>this.SurveyForm.controls["survey_details"]).controls[
      "title"
    ].patchValue(data.title);
    (<FormGroup>this.SurveyForm.controls["survey_details"]).controls[
      "description"
    ].patchValue(data.description);
    for (let q = 0; q < data.questions.length; q++) {
      const QFormArray = this.SurveyForm.get("questions") as FormArray;

      QFormArray.push(this.questions);

      for (
        let option = 0;
        option < data.questions[q].options.length;
        option++
      ) {
        const optionsFormsArray = QFormArray.at(q).get("options") as FormArray;
        optionsFormsArray.push(this.options);
      }
    }

    this.SurveyForm.patchValue(data);
  }

  async onSubmit() {
    let data = this.SurveyForm.value;
    console.log("form data", data);
    let promises = [];
    if (this.SurveyForm.get("questions").touched) {
      console.log("toched");
      let AllQuestions = data.questions;
      // data.questions.forEach((question, qindex) => {
      for (const [qindex, question] of AllQuestions.entries()) {
        let QFormArray = this.SurveyForm.get("questions") as FormArray;
        let QOptions = QFormArray.at(qindex).get("options") as FormArray;
        let selectQuestion = QFormArray.at(qindex);
        if (selectQuestion.touched) {
          question.survey_id = data.survey_details._id;

          if (question._id) {
            // promises.push(this.dataService.updateQuestion(question));
            let editq = question;
            // delete editq.options;
            this.dataService.updateQuestion(editq).subscribe();
            console.log("Update question", editq);
          } else {
            let newq = question;
            // delete newq.options;

            // this.dataService.createQuestion(newq).subscribe();
            this.createdQuestion = await this.dataService
              .createQuestion(newq)
              .toPromise();
            console.log(
              "Create new question this.createdQuestion",
              this.createdQuestion
            );
          }
          let AllQuestions = question.options;
          // question.options.forEach((option, index) => {
          for (const [index, option] of AllQuestions.entries()) {
            let selectOption = QOptions.at(index);
            if (selectOption.touched) {
              option.question_id = question._id;
              if (option._id) {
                // promises.push(this.dataService.updateOption(option));
                this.dataService.updateOption(option).subscribe();
                console.log("update new option", option);
              } else {
                option.question_id = this.createdQuestion._id;
                // promises.push(this.dataService.createOption(option));
                this.dataService.createOption(option).subscribe();
                console.log("Create new option", option);
              }
            }
          }
        }
      }
    }
    if (this.SurveyForm.get("survey_details").touched) {
      if (data.survey_details._id) {
        let newsurv = data.survey_details;
        // delete newsurv.questions;
        // promises.push(this.dataService.updateSurvey(data.survey_details));
        this.dataService.updateSurvey(newsurv).subscribe();
        console.log("Create new survey", newsurv);
      } else {
        let newsurv = data.survey_details;
        // delete newsurv.questions;
        // promises.push(this.dataService.createSurvey(data.survey_details));
        this.dataService.createSurvey(newsurv).subscribe();
        console.log("Create new survey", newsurv);
      }
    }
  }
  createSurvey() {
    console.log("this.newSurveyForm", this.newSurveyForm);
    this.dataService.createSurvey(this.newSurveyForm).subscribe((resp) => {
      console.log("submitSurvey resp", resp);
      this.surveyId = resp._id;
      this.newSurveyForm = {
        title: resp.title,
        description: resp.description,
      };
    });
  }
  logout() {
    this.dataService.logout().subscribe((data) => {
      console.log("logged out", data);
    });
  }
}
