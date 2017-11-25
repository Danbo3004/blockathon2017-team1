import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUploaderComponent } from './ng-uploader.component';

describe('NgUploaderComponent', () => {
  let component: NgUploaderComponent;
  let fixture: ComponentFixture<NgUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
