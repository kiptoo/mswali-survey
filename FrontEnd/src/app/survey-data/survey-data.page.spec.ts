import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurveyDataPage } from './survey-data.page';

describe('SurveyDataPage', () => {
  let component: SurveyDataPage;
  let fixture: ComponentFixture<SurveyDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
