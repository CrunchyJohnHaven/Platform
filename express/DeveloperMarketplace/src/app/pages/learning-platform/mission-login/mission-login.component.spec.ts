import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionLoginComponent } from './mission-login.component';

describe('MissionLoginComponent', () => {
  let component: MissionLoginComponent;
  let fixture: ComponentFixture<MissionLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
