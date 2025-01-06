import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form/login-form.component";

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
