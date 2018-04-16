import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoQuitCalloutComponent } from './no-quit-callout.component';

describe('NoQuitCalloutComponent', () => {
  let component: NoQuitCalloutComponent;
  let fixture: ComponentFixture<NoQuitCalloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoQuitCalloutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoQuitCalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
