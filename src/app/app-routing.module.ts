import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import { Question3Component } from './question3/question3.component';


const routes: Routes = [
  {
    path: 'question1', component: Question1Component
  },
  {
    path: 'question2', loadChildren: () => import('./dynamic-component/dynamic-component.module').then(m => m.DynamicComponentModule)
  },
  {
    path: 'question3', component: Question3Component
  },
  { path: 'question4', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
