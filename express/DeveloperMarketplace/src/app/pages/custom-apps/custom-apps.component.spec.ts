import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAppsComponent } from './custom-apps.component';

describe('CustomAppsComponent', () => {
  let component: CustomAppsComponent;
  let fixture: ComponentFixture<CustomAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
