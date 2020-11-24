import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';
import { Question3Component } from './question3/question3.component';
import { FormsModule } from '@angular/forms';
import { appDynamicDirective } from './dynamic-component/dynamicCom.directive';

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question3Component,
    appDynamicDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
