import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWebComponent } from './form-web.component';

describe('FormWebComponent', () => {
  let component: FormWebComponent;
  let fixture: ComponentFixture<FormWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
