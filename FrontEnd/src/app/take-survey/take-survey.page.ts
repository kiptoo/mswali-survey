import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ModalController, IonRouterOutlet } from "@ionic/angular";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { Observable } from "rxjs";
@Component({
  selector: "app-take-survey",
  templateUrl: "./take-survey.page.html",
  styleUrls: ["./take-survey.page.scss"],
})
export class TakeSurveyPage implements OnInit {
  public survey: any;
  surveyId: String;
  // dynamicForm: any = FormGroup;
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
    // this.dynamicForm = this.fb.group({
    //   email: ["", [Validators.required, Validators.email]],
    //   name: ["", [Validators.required]],
    //   phone: ["", [Validators.required]],
    //   response: this.fb.array([]),
    // });
    this.activatedRoute.queryParams.subscribe((params) => {
      this.surveyId = this.activatedRoute.snapshot.params.id;
    });
  }

  ngOnInit() {
    this.dataService.getsurveyById(this.surveyId).subscribe((survey) => {
      // this.surveys = data;
      let subscount = 0;

      survey.questions.forEach((question) => {
        let dataform = {
          question_id: question._id,
          answer: "",
        };
        this.dynamicForm.response.push(dataform);
        let subs = question.submissions.length;
        subscount = +subs;
      });
      survey.submissionCount = subscount;

      this.survey = survey;
    });
  }
  submitSurvey() {
    console.log("this.dynamicForm", this.dynamicForm);
    this.dataService
      .submitSurvey(this.surveyId, this.dynamicForm)
      .subscribe((resp) => {
        console.log("submitSurvey resp", resp);
      });
  }
}
