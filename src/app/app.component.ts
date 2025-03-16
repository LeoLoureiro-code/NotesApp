import { Component, Renderer2, ViewEncapsulation, inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ThemeService } from '../services/theme.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  currentTheme: 'light' | 'dark';

  constructor(private themeService: ThemeService, private renderer: Renderer2, private apiService: ApiService, private router: Router) {
    this.currentTheme = this.themeService.currentTheme;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme(this.renderer);
    this.currentTheme = this.themeService.currentTheme; 
  }

  logout() {
    this.apiService.logout();
    this.router.navigate(['/login']);
  }
}
