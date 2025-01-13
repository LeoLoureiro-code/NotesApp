import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  constructor(private themeService: ThemeService, private renderer: Renderer2) {}

  toggleTheme(): void {
    // Pass renderer here
    this.themeService.toggleTheme(this.renderer);
  }
}
