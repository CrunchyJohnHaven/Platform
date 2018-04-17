import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOperatesComponent } from './home-operates.component';

describe('HomeOperatesComponent', () => {
  let component: HomeOperatesComponent;
  let fixture: ComponentFixture<HomeOperatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOperatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOperatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
