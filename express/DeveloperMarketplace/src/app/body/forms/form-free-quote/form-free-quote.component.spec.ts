import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFreeQuoteComponent } from './form-free-quote.component';

describe('FormFreeQuoteComponent', () => {
  let component: FormFreeQuoteComponent;
  let fixture: ComponentFixture<FormFreeQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFreeQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFreeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
