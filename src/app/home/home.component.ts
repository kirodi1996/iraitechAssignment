import { Component } from '@angular/core';

@Component({
  selector: 'app-hom',
  template: `<div class="wrapper-body">
  <app-comp1 class="component-1"></app-comp1>
  <app-comp2 class="component-2"></app-comp2>
  <app-comp3 class="component-3"></app-comp3>
  <app-comp4 class="component-4"></app-comp4>
  <app-comp5 class="component-center"></app-comp5></div>
  `,
  styleUrls: ['./home.component.scss']
})
export class  HomeComponent{
  title = 'iraitechAssignment';
  constructor(){
      
  }
}
