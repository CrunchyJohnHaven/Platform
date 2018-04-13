import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFormContentComponent } from './work-form-content.component';

describe('WorkFormContentComponent', () => {
  let component: WorkFormContentComponent;
  let fixture: ComponentFixture<WorkFormContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFormContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
