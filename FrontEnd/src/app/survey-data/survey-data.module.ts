import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyDataPageRoutingModule } from './survey-data-routing.module';

import { SurveyDataPage } from './survey-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyDataPageRoutingModule
  ],
  declarations: [SurveyDataPage]
})
export class SurveyDataPageModule {}
