import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMarketingComponent } from './body-marketing.component';

describe('BodyMarketingComponent', () => {
  let component: BodyMarketingComponent;
  let fixture: ComponentFixture<BodyMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
