import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from './router';
import { AppComponent } from './component';
import { BaseScreenComponent } from './screens';

@NgModule({
  declarations: [
    AppComponent,
    BaseScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export default class { }
