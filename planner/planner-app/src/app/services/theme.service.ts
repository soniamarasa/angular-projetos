import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = 'light';

  setTheme(currentTheme: any): any {
    localStorage.setItem('theme', currentTheme);
  }

  getTheme(): any {
    return localStorage.getItem('theme');
  }
}
