import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCustomAppsComponent } from './header-custom-apps.component';

describe('HeaderCustomAppsComponent', () => {
  let component: HeaderCustomAppsComponent;
  let fixture: ComponentFixture<HeaderCustomAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCustomAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCustomAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
