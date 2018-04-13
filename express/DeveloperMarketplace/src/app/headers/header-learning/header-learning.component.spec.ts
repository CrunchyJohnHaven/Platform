import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLearningComponent } from './header-learning.component';

describe('HeaderLearningComponent', () => {
  let component: HeaderLearningComponent;
  let fixture: ComponentFixture<HeaderLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
