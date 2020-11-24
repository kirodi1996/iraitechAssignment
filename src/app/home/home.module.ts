import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, Comp1Component, Comp2Component, Comp3Component, Comp4Component, Comp5Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:HomeComponent}]),
    FormsModule
  ],
  exports:[
    RouterModule
    
  ]
  
})
export class HomeModule { }
