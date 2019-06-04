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
  { path: 'home', component: HomePageComponent },
  // { path: '/custodian', component: CustodianComponent },
  // { path: '/interview', component: InterviewComponent },
  // { path: '/device', component: BasePageComponent },
  // { path: '/collection', component: BasePageComponent },
  // { path: '/shipment', component: BasePageComponent },
  // { path: '/production', component: BasePageComponent },
  // { path: '/evidence', component: BasePageComponent },
  // { path: '/ticketing', component: BasePageComponent },
  // { path: '/reports', component: BasePageComponent },
  // { path: '/global-search', component: BasePageComponent },
  // { path: '/admin', component: BasePageComponent },
  // { path: '/help', component: BasePageComponent },
  { path: '**', component: PageNotFoundComponent }
];
