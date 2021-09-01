import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthguardService } from "./services/authguard.service";
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home",
    canActivate: [AuthguardService],
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },

  {
    path: "take-survey/:id",
    loadChildren: () =>
      import("./take-survey/take-survey.module").then(
        (m) => m.TakeSurveyPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterPageModule),
  },
  {
    path: "survey/create",
    loadChildren: () =>
      import("./create-survey/create-survey.module").then(
        (m) => m.CreateSurveyPageModule
      ),
    // canActivate: [AuthguardService],
  },
  {
    path: "survey/edit/:id",
    loadChildren: () =>
      import("./edit-survey/edit-survey.module").then(
        (m) => m.EditSurveyPageModule
      ),
    // canActivate: [AuthguardService],
  },
  {
    path: "survey/data/:id",
    loadChildren: () =>
      import("./survey-data/survey-data.module").then(
        (m) => m.SurveyDataPageModule
      ),
    // canActivate: [AuthguardService],
  },
  {
    path: "survey/reports/:id",
    loadChildren: () =>
      import("./survey-reports/survey-reports.module").then(
        (m) => m.SurveyReportsPageModule
      ),
    // canActivate: [AuthguardService],
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
