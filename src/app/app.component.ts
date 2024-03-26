import { Component } from '@angular/core';
import { SidebarMenu } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  currentMenu!: SidebarMenu;
}
