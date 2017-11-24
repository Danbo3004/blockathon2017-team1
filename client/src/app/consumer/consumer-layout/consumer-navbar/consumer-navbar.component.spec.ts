import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerNavbarComponent } from './consumer-navbar.component';

describe('ConsumerNavbarComponent', () => {
  let component: ConsumerNavbarComponent;
  let fixture: ComponentFixture<ConsumerNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
