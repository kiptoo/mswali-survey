import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { tap, map } from "rxjs/operators";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class DataService {
  private contacts: any[];
  private surveys: any[];

  private lastId: number = 20;

  constructor(private http: HttpClient, private router: Router) {}

  getsurveys(user_id): Observable<any[]> {
    if (this.surveys) {
      return of(this.surveys);
    } else {
      // fetch contacts
      console.log("get getsurveys");
      let server = `${environment.serverurl}/api/surveys_byuser/${user_id}`;
      console.log("get getsurveys server", server);
      return this.http
        .get<any[]>(server, {
          withCredentials: true,
        })
        .pipe(
          map(
            (res: any) => {
              console.log(res);
              return res;
            },
            (err) => {
              console.log(err);
            }
          )
        );
    }
  }
  getsurveyById(id): Observable<any> {
    console.log("get getsurveys");
    let server = `${environment.serverurl}/api/get_surveyByid/${id}`;
    console.log("get getsurveys server", server);
    return this.http
      .get<any[]>(server, {
        withCredentials: true,
      })
      .pipe(
        map(
          (res: any) => {
            console.log(res);
            return res;
          },
          (err) => {
            console.log(err);
          }
        )
      );
  }
  submitSurvey(id, data): Observable<any> {
    return this.http
      .post<any>(`${environment.serverurl}/api/submit_survey/${id}`, data, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          console.log(response);

          return response;
        })
      );
  }
  createSurvey(data): Observable<any> {
    return this.http
      .post<any>(`${environment.serverurl}/api/backend/surveys`, data, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          console.log(response);

          return response;
        })
      );
  }
  updateSurvey(data): Observable<any> {
    return this.http
      .post<any>(`${environment.serverurl}/api/survey/${data._id}`, data, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          console.log(response);

          return response;
        })
      );
  }
  createQuestion(data): Observable<any> {
    return (
      this.http
        .post<any>(`${environment.serverurl}/api/survey/add_question`, data, {
          withCredentials: true,
        })
        // .toPromise();
        .pipe(
          tap((response) => {
            console.log(response);

            return response;
          })
        )
    );
  }
  updateQuestion(data): Observable<any> {
    return this.http
      .post<any>(
        `${environment.serverurl}/api/survey/update_question/${data._id}`,
        data,
        {
          withCredentials: true,
        }
      )
      .pipe(
        tap((response) => {
          console.log(response);

          return response;
        })
      );
  }
  createOption(data): Observable<any> {
    return this.http
      .post<any>(`${environment.serverurl}/api/question/add_option`, data, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          console.log(response);

          return response;
        })
      );
  }
  updateOption(data): Observable<any> {
    return this.http
      .post<any>(
        `${environment.serverurl}/api/question/update_option/${data._id}`,
        data,
        {
          withCredentials: true,
        }
      )
      .pipe(
        tap((response) => {
          console.log(response);

          return response;
        })
      );
  }
  login(body): Observable<any> {
    return this.http
      .post<any>(`${environment.serverurl}/api/backend/login`, body, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          console.log(response);

          return response;
        })
      );
  }
  logout(): Observable<any> {
    return this.http
      .post<any>(`${environment.serverurl}/api/backend/logout`, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          console.log(response);
          localStorage.setItem("isLoggedIn", "false");
          localStorage.removeItem("mswalitoken");
          this.router.navigateByUrl("login");
          // return response;
        })
      );
  }

  signup(body): Observable<any> {
    return this.http
      .post<any>(`${environment.serverurl}/api/backend/signup`, body, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          console.log(response);

          return response;
        })
      );
  }
}
