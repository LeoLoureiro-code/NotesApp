import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme: 'light' | 'dark' = 'light';

  toggleTheme(renderer: any): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';

    // Update body class
    renderer.removeClass(document.body, `${this.currentTheme}-theme`);
    renderer.addClass(document.body, `${newTheme}-theme`);

    this.currentTheme = newTheme;
  }
}
