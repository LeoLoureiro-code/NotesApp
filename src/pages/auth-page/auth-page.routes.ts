import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { ResetPassword } from "./reset-password/reset-password";
import { ForgotPassword } from "./forgot-password/forgot-password";
import { AuthPage } from "./auth-page";

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      { path: '', component: Login },
      { path: 'signup', component: Signup},
      { path: 'forgot', component: ForgotPassword },
      { path: 'reset', component: ResetPassword },
    ],
  },
];