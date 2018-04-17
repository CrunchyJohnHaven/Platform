import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMarketingComponent } from './header-marketing.component';

describe('HeaderMarketingComponent', () => {
  let component: HeaderMarketingComponent;
  let fixture: ComponentFixture<HeaderMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
