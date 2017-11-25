import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupHomeStepsComponent } from './setup-home-steps.component';

describe('SetupHomeStepsComponent', () => {
  let component: SetupHomeStepsComponent;
  let fixture: ComponentFixture<SetupHomeStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupHomeStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupHomeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
