import { Routes } from '@angular/router';

import { BasePageComponent, PageNotFoundComponent } from './core/pages';
import { HomePageComponent } from './features/home-page';

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
