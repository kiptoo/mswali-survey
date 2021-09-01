import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeSurveyPageRoutingModule } from './take-survey-routing.module';

import { TakeSurveyPage } from './take-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeSurveyPageRoutingModule
  ],
  declarations: [TakeSurveyPage]
})
export class TakeSurveyPageModule {}
