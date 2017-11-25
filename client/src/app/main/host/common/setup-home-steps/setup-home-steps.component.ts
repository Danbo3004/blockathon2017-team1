import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setup-home-steps',
  templateUrl: './setup-home-steps.component.html',
  styleUrls: ['./setup-home-steps.component.css']
})
export class SetupHomeStepsComponent implements OnInit {
  @Input() steps: any [] = [];
  @Input() selectedIndex: any;
  @Output() selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(index: number) {
    this.selectedIndex = index;
    this.selectedIndexChange.emit(index);
  }
}
