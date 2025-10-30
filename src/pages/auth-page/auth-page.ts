import { Component } from '@angular/core';
import { Login } from "../../components/login/login";
import { ResetPassword } from "../../components/reset-password/reset-password";
import { ForgotPassword } from "../../components/forgot-password/forgot-password";

@Component({
  selector: 'auth-page',
  imports: [Login, ResetPassword, ForgotPassword],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.scss'
})
export class AuthPage {

}
