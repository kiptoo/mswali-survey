import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyDataPage } from './survey-data.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyDataPageRoutingModule {}
