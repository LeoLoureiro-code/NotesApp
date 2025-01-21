import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from "../../components/register/register.component";  

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [LoginComponent, CommonModule, RegisterComponent],  
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(public themeService: ThemeService) {}

 
  get currentTheme(): 'light' | 'dark' {
    return this.themeService.currentTheme;
  }
}
