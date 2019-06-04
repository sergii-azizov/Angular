import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HttpService, HttpInterceptorService } from './services';
import { BasePageComponent, HomePageComponent, HomePageModule, PageNotFoundComponent } from './pages';
import { HeaderComponent } from './features/header/header.component';
import { HomeModule } from './pages/home.module/home.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HomePageModule,
    HomeModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    BasePageComponent,
    HeaderComponent
  ],
  providers: [
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export default class {
}
