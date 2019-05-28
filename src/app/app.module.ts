import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HttpService, HttpInterceptorService } from './services';
import { BasePageComponent, HomePageComponent, HomePageModule, PageNotFoundComponent } from './pages';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HomePageModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    BasePageComponent
  ],
  providers: [
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export default class {
}
