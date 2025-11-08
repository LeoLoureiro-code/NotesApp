import { Routes } from '@angular/router';
import { Home } from "./home";


export const HOME_ROUTES: Routes = [
  {
    path: 'auth',
    component: Home,
    children: [
    //   { path: 'login', component: Login },
    //   { path: 'signup', component: Signup },
    //   { path: 'forgot', component: ForgotPassword },
    //   { path: 'reset', component: ResetPassword },
    ],
  },
];