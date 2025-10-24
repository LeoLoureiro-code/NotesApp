import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('NoteTakingApp');

  toggleTheme(isDark: boolean) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(isDark ? 'dark-theme' : 'light-theme');
}
}
