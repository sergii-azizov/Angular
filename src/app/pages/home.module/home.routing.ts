import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';



const homePageRoutes: Routes = [
  { path: 'home',
    children: [
      { path: '', component: HomePageComponent }
    ]
  }
];

export const HomePageRouting = RouterModule.forChild(homePageRoutes);
