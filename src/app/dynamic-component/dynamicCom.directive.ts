import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamic]'
})
export class appDynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
