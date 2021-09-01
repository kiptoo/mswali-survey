import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyReportsPageRoutingModule } from './survey-reports-routing.module';

import { SurveyReportsPage } from './survey-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyReportsPageRoutingModule
  ],
  declarations: [SurveyReportsPage]
})
export class SurveyReportsPageModule {}
