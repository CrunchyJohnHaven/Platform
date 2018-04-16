import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroLearningComponent } from './intro-learning.component';

describe('IntroLearningComponent', () => {
  let component: IntroLearningComponent;
  let fixture: ComponentFixture<IntroLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
