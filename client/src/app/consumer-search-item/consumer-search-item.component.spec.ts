import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerSearchItemComponent } from './consumer-search-item.component';

describe('ConsumerSearchItemComponent', () => {
  let component: ConsumerSearchItemComponent;
  let fixture: ComponentFixture<ConsumerSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
