import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ModalController, IonRouterOutlet } from "@ionic/angular";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-survey-data",
  templateUrl: "./survey-data.page.html",
  styleUrls: ["./survey-data.page.scss"],
})
export class SurveyDataPage implements OnInit {
  public survey: any;
  surveyId: String;
  showdetail: Boolean = false;
  selectedSubmission: any;
  // dynamicForm: any = FormGroup;
  dynamicForm = {
    email: "",
    name: "",
    phone: "",
    response: [],
  };
  x = -1;
  tableHeaders = ["#", "name"];
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
  scrollingElement = document.scrollingElement || document.body;
  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.surveyId = this.activatedRoute.snapshot.params.id;
    });
  }

  ngOnInit() {
    this.dataService.getsurveyById(this.surveyId).subscribe((survey) => {
      // this.surveys = data;
      let subscount = 0;

      survey.submissions[0].response.forEach((response) => {
        let question = response.question_id.title;
        this.tableHeaders.push(question);
        // })
      });

      this.survey = survey;
    });
  }
  goToBottom() {
    this.scrollingElement.scrollTop = this.scrollingElement.scrollHeight;
  }
  showDetails(i) {
    this.goToBottom();
    if (this.x == -1) this.showdetail = !this.showdetail;
    if (this.x != -1 && this.x == i) this.showdetail = !this.showdetail;
    this.x = i;

    // alert(i);

    this.selectedSubmission = this.survey.submissions[i];
    console.log("submission " + i, this.selectedSubmission);
  }
}
