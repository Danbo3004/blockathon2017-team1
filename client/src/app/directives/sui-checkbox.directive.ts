import { Directive, ElementRef } from '@angular/core';

declare const $: any;

@Directive({
  selector: '[appSuiCheckbox]',
})
export class SuiCheckboxDirective {

  constructor(private elementRef: ElementRef) {
    $(this.elementRef.nativeElement).checkbox();
  }
}
