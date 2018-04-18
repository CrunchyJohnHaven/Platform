import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUsMapComponent } from './home-us-map.component';

describe('HomeUsMapComponent', () => {
  let component: HomeUsMapComponent;
  let fixture: ComponentFixture<HomeUsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
