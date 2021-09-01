import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSurveyPage } from './edit-survey.page';

describe('EditSurveyPage', () => {
  let component: EditSurveyPage;
  let fixture: ComponentFixture<EditSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSurveyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
