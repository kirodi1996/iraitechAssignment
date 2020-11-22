import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic-component';
import {DynamicDashboard} from './dynamic.component';
import { XComponent } from './x-component/x-component.component'
import {  RouterModule } from '@angular/router';
import { YComponent } from './y/y.component';



@NgModule({
  declarations: [
    DynamicDashboard,
    DynamicComponent,
    XComponent,
    YComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:DynamicDashboard}])
  ],
  entryComponents:[XComponent,YComponent],
  exports:[RouterModule]
})
export class DynamicComponentModule {  }
