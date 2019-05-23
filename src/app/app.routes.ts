import { Routes } from '@angular/router';

import { BasePageComponent, PageNotFoundComponent } from './pages';
import { HomePageComponent } from './pages/home-page';

export const routes: Routes = [
  {
    path: '',
    component: BasePageComponent,
    children: [
      { path: '', component: HomePageComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
