import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCustomAppsComponent } from './body-custom-apps.component';

describe('BodyCustomAppsComponent', () => {
  let component: BodyCustomAppsComponent;
  let fixture: ComponentFixture<BodyCustomAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCustomAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCustomAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
