import { Component, EventEmitter, Output } from '@angular/core';

// export declare type SidebarMenu = 'not_selected' | 'product' | 'category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // currentMenu: SidebarMenu = 'product'
  // @Output() changedMenu: EventEmitter<String> = new EventEmitter();

  // clickedMenu(menu: SidebarMenu) {
  //   this.currentMenu = menu;
  //   this.changedMenu.emit(menu);
  // }
}
