import { Component } from '@angular/core';

@Component({
  selector: 'app-hom',
  template: `<app-comp1></app-comp1>
  <app-comp2></app-comp2>
  <app-comp3></app-comp3>
  <app-comp4></app-comp4>
  <app-comp5></app-comp5>
  `
})
export class  HomeComponent{
  title = 'iraitechAssignment';
  constructor(){
      
  }
}
