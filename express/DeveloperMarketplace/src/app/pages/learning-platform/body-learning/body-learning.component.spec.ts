import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLearningComponent } from './body-learning.component';

describe('BodyLearningComponent', () => {
  let component: BodyLearningComponent;
  let fixture: ComponentFixture<BodyLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
