import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [LoginFormComponent, CommonModule],  
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(public themeService: ThemeService) {}

 
  get currentTheme(): 'light' | 'dark' {
    return this.themeService.currentTheme;
  }
}
