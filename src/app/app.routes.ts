import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { LoginPage } from '../pages/login-page/login-page';

export const routes: Routes = [
     {path: 'home', component: Home},
     {path: '', redirectTo: '/login', pathMatch: 'full'},
     {path: 'login', component: LoginPage},
];
