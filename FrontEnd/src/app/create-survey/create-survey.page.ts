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
  selector: "app-create-survey",
  templateUrl: "./create-survey.page.html",
  styleUrls: ["./create-survey.page.scss"],
})
export class CreateSurveyPage implements OnInit {
  public survey: any;
  surveyId: String;
  currentUser: any;
  username: string;
  // dynamicForm: any = FormGroup;
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
    // this.dynamicForm = this.fb.group({
    //   email: ["", [Validators.required, Validators.email]],
    //   name: ["", [Validators.required]],
    //   phone: ["", [Validators.required]],
    //   response: this.fb.array([]),
    // });
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   this.surveyId = this.activatedRoute.snapshot.params.id;
    // });
  }

  ngOnInit() {}
  createSurvey() {
    console.log("this.newSurveyForm", this.newSurveyForm);
    this.dataService.createSurvey(this.newSurveyForm).subscribe((resp) => {
      console.log("submitSurvey resp", resp);
      this.surveyId = resp._id;
      this.router.navigateByUrl("survey/edit/" + this.surveyId);
    });
  }
  logout() {
    this.dataService.logout().subscribe((data) => {
      console.log("logged out", data);
    });
  }
}
