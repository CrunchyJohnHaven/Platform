import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnOnlineMoreInfoComponent } from './learn-online-more-info.component';

describe('LearnOnlineMoreInfoComponent', () => {
  let component: LearnOnlineMoreInfoComponent;
  let fixture: ComponentFixture<LearnOnlineMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnOnlineMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnOnlineMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
