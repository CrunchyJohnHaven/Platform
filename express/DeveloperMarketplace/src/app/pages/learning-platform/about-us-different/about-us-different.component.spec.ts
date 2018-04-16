import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDifferentComponent } from './about-us-different.component';

describe('AboutUsDifferentComponent', () => {
  let component: AboutUsDifferentComponent;
  let fixture: ComponentFixture<AboutUsDifferentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsDifferentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsDifferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
