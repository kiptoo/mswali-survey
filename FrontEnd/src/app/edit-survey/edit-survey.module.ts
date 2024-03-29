import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EditSurveyPageRoutingModule } from "./edit-survey-routing.module";

import { EditSurveyPage } from "./edit-survey.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditSurveyPageRoutingModule,
  ],
  declarations: [EditSurveyPage],
})
export class EditSurveyPageModule {}
