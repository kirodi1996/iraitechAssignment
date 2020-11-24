import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DynamicDashboard} from './dynamic.component';
import { XComponent } from './x-component/x-component.component'
import {  RouterModule } from '@angular/router';
import { YComponent } from './y/y.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DynamicDashboard,
    
    XComponent,
    YComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path:'',component:DynamicDashboard}])
  ],
  entryComponents:[XComponent,YComponent],
  exports:[RouterModule]
})
export class DynamicComponentModule {  }
