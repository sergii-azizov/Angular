import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageRouting } from './home.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRouting
  ]
})
export class HomeModule { }
