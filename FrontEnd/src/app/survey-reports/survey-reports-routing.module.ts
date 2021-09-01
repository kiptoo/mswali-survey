import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyReportsPage } from './survey-reports.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyReportsPageRoutingModule {}
