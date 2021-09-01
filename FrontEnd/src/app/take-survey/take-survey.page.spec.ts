import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeSurveyPage } from './take-survey.page';

describe('TakeSurveyPage', () => {
  let component: TakeSurveyPage;
  let fixture: ComponentFixture<TakeSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeSurveyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
