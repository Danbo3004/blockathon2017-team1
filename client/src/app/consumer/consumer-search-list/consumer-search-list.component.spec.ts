import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerSearchListComponent } from './consumer-search-list.component';

describe('ConsumerSearchListComponent', () => {
  let component: ConsumerSearchListComponent;
  let fixture: ComponentFixture<ConsumerSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
