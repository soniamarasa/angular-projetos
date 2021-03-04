import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planner-app';
  constructor(public themeService: ThemeService) {}

  ngOnInit(): any {
   if (!this.themeService.getTheme()) {
      this.themeService.theme = 'light';
    } else {
      this.themeService.theme = this.themeService.getTheme();
    }
  }
}