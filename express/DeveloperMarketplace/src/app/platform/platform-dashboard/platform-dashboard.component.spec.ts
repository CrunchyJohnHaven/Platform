import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformDashboardComponent } from './platform-dashboard.component';

describe('PlatformDashboardComponent', () => {
  let component: PlatformDashboardComponent;
  let fixture: ComponentFixture<PlatformDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
