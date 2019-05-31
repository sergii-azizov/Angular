import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HttpInterceptorService } from './interceptors';
import { HttpService } from './services';
import { appReducers } from './app.reducer';
import { BasePageComponent, HomePageComponent, HomePageModule, PageNotFoundComponent } from './pages';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    RouterModule.forRoot(routes),
    HttpClientModule,
    HomePageModule,
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
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
