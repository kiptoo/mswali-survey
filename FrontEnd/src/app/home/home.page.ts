import { Component } from "@angular/core";

import { DataService } from "../services/data.service";
import { ModalController, IonRouterOutlet } from "@ionic/angular";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public contacts: Observable<any[]>;
  public surveys: any[];
  SubmissionCount: Number = 0;
  public currentSegment: string = "All";
  currentUser: any;
  username: string;
  public clientUrl: string = "";
  encryptvalue: String = null;
  decryptvalue: String = null;
  encryptinput = { value: null };
  decryptinput = { value: null };
  // surveys = [
  //   {
  //     _id: 34,
  //   },
  //   {
  //     _id: 35,
  //   },
  //   {
  //     _id: 36,
  //   },
  //   {
  //     _id: 37,
  //   },
  // ];
  constructor(
    private dataService: DataService,
    private router: Router,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.clientUrl = window.location.hostname + ":" + window.location.port;
    this.currentUser = JSON.parse(localStorage.getItem("mswalitoken"));
    // this.contacts = this.dataService.getContacts();
    // console.log("this.contacts", this.contacts);
    let user_id = this.currentUser._id;
    this.dataService.getsurveys(user_id).subscribe((data) => {
      // this.surveys = data;
      let subscount = 0;
      this.surveys = data.map((survey) => {
        survey.questions.forEach((question) => {
          let subs = question.submissions.length;
          subscount = +subs;
        });
        survey.submissionCount = subscount;
        return survey;
      });
      console.log("this.surveyData", data);
      return data;
    });
    console.log("this.surveyData", this.surveys);

    let splitname = this.currentUser.email.split("@");
    this.username = splitname[0];
  }

  ionViewWillEnter() {
    this.clientUrl = window.location.port
      ? window.location.hostname + ":" + window.location.port
      : window.location.hostname;
  }
  delete(id) {
    alert("delete survey :" + id);
    // this.dataService.deleteSurvey(id).subscribe((data) => {
    //   console.log("logged out", data);
    // });
  }
  logout() {
    this.dataService.logout().subscribe((data) => {
      console.log("logged out", data);
    });
  }
}
