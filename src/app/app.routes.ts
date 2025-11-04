import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { AUTH_ROUTES } from '../pages/auth-page/auth-page.routes';

export const routes: Routes = [
  { path: 'home', component: Home },
  ...AUTH_ROUTES,
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];