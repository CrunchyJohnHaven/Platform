import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeamLeadsComponent } from './home-team-leads.component';

describe('HomeTeamLeadsComponent', () => {
  let component: HomeTeamLeadsComponent;
  let fixture: ComponentFixture<HomeTeamLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTeamLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTeamLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
